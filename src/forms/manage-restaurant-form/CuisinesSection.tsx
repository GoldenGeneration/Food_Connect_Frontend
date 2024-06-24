import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FoodList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisineCheckbox from "./CuisineCheckbox";

const CuisinesSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Cuisines</h2>
        <FormDescription>
          Select the category
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="foodCategory"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1">
              {FoodList.map((Item) => (
                <CuisineCheckbox foodCategory={Item} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CuisinesSection;
