"use client";
import GlobalFooter from "@/components/section/global/global-footer";
import GlobalHeader from "@/components/section/global/global-header";
import { useTranslation } from "@/utils/localization/clinet";
import { Heading, Text, Container, Button } from "@radix-ui/themes";

export default function NotFound() {
  const path = window.location.pathname;
  const lang = path.split("/")[1] as "en" | "ko";
  const { t } = useTranslation(lang, "not-found");

  return (
    <>
      <GlobalHeader lang={lang} />
      <Container className="text-center min-h-[70vh] flex flex-col justify-center">
        <Heading size="8" mb="4" className="text-center text-5xl">
          404 Not Found
        </Heading>
        <Text align="center">
          {t("not-found").replace("{path}", path)}
          <br />
          {t("description")}
        </Text>
        <div className="flex gap-2 justify-center mt-5">
          <Button
            variant="outline"
            onClick={() => {
              window.history.back();
            }}
          >
            {t("links.before")}
          </Button>
          <Button
            onClick={() => {
              window.location.href = "/";
            }}
          >
            {t("links.home")}
          </Button>
        </div>
      </Container>
      <GlobalFooter lang={lang} />
    </>
  );
}
