import type { AnyFieldApi } from "@tanstack/react-form/nextjs";

export default function FieldInfo({ field }: { field: AnyFieldApi }) {
  if (!field.state.meta.errors?.length) return null;

  return (
    <ul className="list-disc pl-4 text-red-500 text-sm">
      {field.state.meta.errors.map((error) => (
        <li key={error.message || error.onChange}>{error.message || error}</li>
      ))}
    </ul>
  );
}
