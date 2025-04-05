import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '"Rawest", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
  margin: "0",
  padding: "0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "16px",
  width: "100%",
  maxWidth: "420px",
};

const paragraph = {
  color: "#2a2a2a",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  margin: "16px 0",
};

const accent = {
  color: "#32b4a3",
};

const footer = {
  color: "#8898aa",
  fontSize: "11px",
  lineHeight: "16px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "16px 0",
};

export default function ComingSoonSubscribedEmail() {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Benvenuto in Square!</Preview>
        <Container style={container}>
          <Text
            style={{
              ...paragraph,
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "24px",
            }}
          >
            Benvenuto in Square!
          </Text>
          <Text style={paragraph}>
            Grazie per esserti iscritto alla lista di attesa!
          </Text>
          <Text style={paragraph}>
            Ti terremo aggiornato su tutte le novità e ti avviseremo non appena
            saremo pronti per il lancio.
          </Text>
          <Text style={{ ...paragraph, marginTop: "24px" }}>
            A presto,
            <br />— Il team di <span style={accent}>SQR Digital</span>
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            SQR Digital, Via Belluno 7/A, 32044 Pieve di Cadore (BL)
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
