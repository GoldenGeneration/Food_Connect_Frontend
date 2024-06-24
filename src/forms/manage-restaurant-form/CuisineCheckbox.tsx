import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
  foodCategory: string;
  field: ControllerRenderProps<FieldValues, "foodCategory">;
};

const CuisineCheckbox = ({ foodCategory, field }: Props) => {
  return (
    <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className="bg-white"
          checked={field.value.includes(foodCategory)}
          onCheckedChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, foodCategory]);
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== foodCategory)
              );
            }
          }}
        />
      </FormControl>
      <FormLabel className="text-sm font-normal">{foodCategory}</FormLabel>
    </FormItem>
  );
};

export default CuisineCheckbox;
