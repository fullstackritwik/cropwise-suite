import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgriTrack — Farm Operations Management" },
      {
        name: "description",
        content:
          "AgriTrack is a farm operations platform for managing regions, farms, owners, supervisors and field activity logs in one place.",
      },
      { property: "og:title", content: "AgriTrack — Farm Operations Management" },
      {
        property: "og:description",
        content:
          "Track regions, farms, owners, supervisors and daily field activity across your entire agricultural operation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className="sr-only">AgriTrack farm operations management</h1>
      <iframe
        src="/agritrack.html"
        title="AgriTrack farm operations management"
        className="fixed inset-0 h-full w-full border-0"
      />
    </>
  );
}
