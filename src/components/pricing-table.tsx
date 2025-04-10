import { Display1, Text } from "./typography";

export function PricingTable() {
  return (
    <div className="max-w-md mx-auto py-12 flex flex-col gap-4">
      <Display1 as="h1">TODO: Piani e prezzi</Display1>
      <Text>
        Tabella dei piani e prezzi. Se loggato, possibilità di andare
        direttamente al customer portal.
      </Text>
    </div>
  );
}
