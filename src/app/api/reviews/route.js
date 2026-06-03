export async function GET() {
    try {
        return Response.json({
            reviews: [
                {
                    reviewId: "1",
                    comment: "Test review",
                    starRating: 5,
                    reviewer: {
                        displayName: "Test User"
                    }
                }
            ]
        });
    } catch (error) {
        console.error("API ERROR:", error);

        return Response.json(
            {
                error: "Failed to load reviews"
            },
            { status: 500 }
        );
    }
}