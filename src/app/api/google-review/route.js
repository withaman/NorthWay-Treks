export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`
  );

  const data = await res.json();

  return Response.json(data.result);
}