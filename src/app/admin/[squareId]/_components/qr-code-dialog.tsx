import { Display2, Small, Text } from "@/components/typography";
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
import type { Doc } from "@/convex/_generated/dataModel";
import { ArrowRight, DownloadIcon } from "lucide-react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";

export function QrCodeDialog({ square }: { square: Doc<"squares"> }) {
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

        <div className="flex justify-center items-center my-4 rounded-lg border border-accent p-4 aspect-square">
          <Link href={`/square/${square._id}`}>
            <QRCodeSVG
              value={`${process.env.NEXT_PUBLIC_APP_URL}/square/${square._id}`}
              size={512}
              fgColor="#000000"
              bgColor="#FFFFFF"
              marginSize={2}
              className="w-full h-full"
            />
          </Link>
        </div>

        <Small>
          PNG è un formato immagine che puoi utilizzare nella maggior parte dei
          programmi (ad esempio Word). SVG è il formato vettoriale, utile se
          vuoi darlo ad un grafico o tipografia per utilizzi avanzati (es.
          incisione su legno).
        </Small>

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
