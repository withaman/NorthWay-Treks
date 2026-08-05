"use client";

export default function SeoSection({
    formData,
    handleSeoChange,
}) {

    const seo = formData?.seo || {};

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6">

            <h2 className="text-lg font-semibold mb-6">
                SEO Settings
            </h2>


            <div className="grid md:grid-cols-2 gap-5">


                {/* SEO Title */}
                <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        SEO Title
                    </label>


                    <input
                        type="text"
                        name="title"
                        value={seo.title || ""}
                        onChange={handleSeoChange}
                        placeholder="Best Kedarkantha Trek Package 2026"
                        className="w-full border rounded-lg px-4 py-3"
                    />


                    <p className="text-xs text-gray-500 mt-1">
                        {(seo.title || "").length}/60 Characters
                    </p>

                </div>



                {/* Canonical URL */}

                <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Canonical URL
                    </label>


                    <input
                        type="text"
                        name="canonical"
                        value={seo.canonical || ""}
                        onChange={handleSeoChange}
                        placeholder="https://northwaytreks.com/kedarkantha-trek"
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>


            </div>




            {/* Meta Description */}

            <div className="mt-5">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Description
                </label>


                <textarea
                    rows={4}
                    name="description"
                    value={seo.description || ""}
                    onChange={handleSeoChange}
                    placeholder="Write SEO description..."
                    className="w-full border rounded-lg p-4"
                />


                <p className="text-xs text-gray-500 mt-1">
                    {(seo.description || "").length}/160 Characters
                </p>


            </div>




            {/* Keywords */}

            <div className="mt-5">


                <label className="block text-sm font-medium text-gray-700 mb-2">
                    SEO Keywords
                </label>


                <input
                    type="text"
                    name="keywords"
                    value={seo.keywords || ""}
                    onChange={handleSeoChange}
                    placeholder="kedarkantha trek, winter trek, uttarakhand trek"
                    className="w-full border rounded-lg px-4 py-3"
                />


            </div>





            {/* OG Image */}

            <div className="mt-5">


                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Open Graph Image
                </label>


                <input
                    type="file"
                    name="ogImage"
                    accept="image/*"
                    onChange={handleSeoChange}
                />


            </div>





            {/* Robots */}

            <div className="mt-5">


                <label className="block text-sm font-medium text-gray-700 mb-3">
                    Search Engine Visibility
                </label>


                <select
                    name="robots"
                    value={seo.robots || "index,follow"}
                    onChange={handleSeoChange}
                    className="w-full border rounded-lg px-4 py-3"
                >

                    <option value="index,follow">
                        Index & Follow
                    </option>


                    <option value="noindex,nofollow">
                        No Index & No Follow
                    </option>


                </select>


            </div>


        </div>
    );
}