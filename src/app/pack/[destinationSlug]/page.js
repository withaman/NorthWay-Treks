import { destinations } from "@/assets/assets";
import PlaceLayout from "@/components/PlaceLayout";

export default async function DestinationPage({ params }) {
  const { destinationSlug } = await params;
  console.log(destinationSlug);
  // find the correct trek
  const trekInfo = destinations.find((t) => t.id === destinationSlug);
  console.log(trekInfo);
  if (!trekInfo) return <div>Destination not found</div>;

  // render the layout
  //   return <PlaceLayout trekInfo={trekInfo} />;
}
