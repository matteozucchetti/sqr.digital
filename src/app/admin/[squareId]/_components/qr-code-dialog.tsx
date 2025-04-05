import { Display2, Text } from "@/components/typography";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, DownloadIcon } from "lucide-react";

export function QrCodeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Visualizza QRCode</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <Display2>Il tuo QR-Code</Display2>
          </DialogTitle>
          <DialogDescription>
            <Text>
              Scarica il QR-Code della tua attività, stampalo e ponilo in modo
              che tutti i tuoi clienti possano facilmente inquadrarlo.
            </Text>
            <Button variant="link">Cosa fare dopo averlo scaricato?</Button>
            <Button variant="link">
              Consulta la nostra guida
              <ArrowRight className="size-4" />
            </Button>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="grid grid-cols-2 gap-2">
          <Button>
            PNG
            <DownloadIcon className="size-4" />
          </Button>
          <Button>
            SVG
            <DownloadIcon className="size-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
