import * as Form from "@radix-ui/react-form";
import type { IconType } from "react-icons";

const dataInvalid = "data-[invalid=true]:";

const invalidDataText = (attribute: string = "") =>
  `${attribute}text-red-500 dark:${attribute}text-red-300`;

const FormField = ({
  children,
  serverInvalid,
  name,
}: {
  children: React.ReactNode;
  serverInvalid: boolean;
  name: string;
}) => (
  <Form.Field
    name={name}
    className={`${invalidDataText(dataInvalid)} group grid gap-3`}
    serverInvalid={serverInvalid}
  >
    {children}
  </Form.Field>
);

const FormLabel = ({ children }: { children: React.ReactNode }) => (
  <Form.Label className={`font-semibold ${invalidDataText(dataInvalid)}`}>
    {children}
  </Form.Label>
);

const FormMessage = ({ children }: { children: React.ReactNode }) => (
  <Form.Message className={`${invalidDataText()} text-sm`}>
    {children}
  </Form.Message>
);

const FormGroup = ({
  Icon,
  input,
}: {
  Icon: IconType;
  input: React.ReactNode;
}) => {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border border-purple-600 p-3 group-data-[invalid=true]:border-red-500 dark:border-purple-300`}
    >
      <span>
        <Icon className="text-purple pointer-events-none" />
      </span>
      <Form.Control asChild className="myinput">
        {input}
      </Form.Control>
    </div>
  );
};

export { FormGroup, FormField, FormLabel, FormMessage };
