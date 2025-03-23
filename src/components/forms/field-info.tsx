import type { AnyFieldApi } from "@tanstack/react-form/nextjs";

export default function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <ul className="list-disc pl-4">
          {field.state.meta.errors.map((err) => (
            <li key={err.message}>{err.message}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
