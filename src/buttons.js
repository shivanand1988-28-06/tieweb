import { ButtonGroup, Button } from "@material-tailwind/react";
 
export function ButtonGroupCustomStyles() {
  return (
    <ButtonGroup className="gap-1 bg-blue-500/25 p-1">
      <Button className="rounded-none">My work</Button>
     
    </ButtonGroup>
  );
}