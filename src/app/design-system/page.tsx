import {
  Display1,
  Display2,
  Display3,
  Display4,
  Display5,
  Display6,
  Small,
  Text,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";

export default function DesignSystem() {
  return (
    <div className="py-10 space-y-12">
      {/* Container Section */}
      <section className="space-y-6">
        <Container>
          <Display2 as="h2">Containers</Display2>
        </Container>

        <div className="space-y-8">
          <Container>
            {/* Padded Container Example */}
            <div className="space-y-2">
              <Text as="p" className="text-muted-foreground">
                Padded Container (Default)
              </Text>
              <Container className="bg-muted min-h-[100px] flex items-center justify-center">
                <Text>This container has padding and max-width</Text>
              </Container>
            </div>
          </Container>

          {/* Full Width Container Example */}
          <div className="space-y-2">
            <Text as="p" className="text-muted-foreground">
              Full Width Container
            </Text>
            <Container
              variant="full"
              className="bg-muted min-h-[100px] flex items-center justify-center"
            >
              <Text>This container is full width</Text>
            </Container>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <Container>
        <section className="space-y-6">
          <Display2 as="h2">Typography</Display2>
          <div className="space-y-4">
            <Display1 as="h1">Display 1 - The quick brown fox (4xl)</Display1>
            <Display2 as="h2">Display 2 - The quick brown fox (3xl)</Display2>
            <Display3 as="h3">Display 3 - The quick brown fox (2xl)</Display3>
            <Display4 as="h4">Display 4 - The quick brown fox (xl)</Display4>
            <Display5 as="h5">Display 5 - The quick brown fox (lg)</Display5>
            <Display6 as="h6">Display 6 - The quick brown fox (base)</Display6>
            <Text as="p">
              Regular text - The quick brown fox jumps over the lazy dog. This
              is a paragraph of text that demonstrates the base text size and
              styling. It can be used for regular content throughout the
              application.
            </Text>
            <Small as="p">
              Small text - The quick brown fox jumps over the lazy dog. This is
              a paragraph of text that demonstrates the base text size and
              styling. It can be used for regular content throughout the
              application.
            </Small>
          </div>
        </section>
      </Container>

      {/* Buttons Section */}
      <Container>
        <section className="space-y-6">
          <Display2 as="h2">Buttons</Display2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Large</Button>
            <Button>Default</Button>
            <Button size="sm">Small</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
          </div>
        </section>
      </Container>

      {/* Form Elements */}
      <Container>
        <section className="space-y-6">
          <Display2 as="h2">Form Elements</Display2>
          <div className="grid gap-6 max-w-sm">
            <div className="space-y-2">
              <label htmlFor="default" className="text-base block">
                Default Input
              </label>
              <Input id="default" placeholder="Default input" />
            </div>
            <div className="space-y-2">
              <label htmlFor="disabled" className="text-base block">
                Disabled Input
              </label>
              <Input id="disabled" placeholder="Disabled input" disabled />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
