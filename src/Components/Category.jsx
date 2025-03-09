    import CategoryCard from "./CategoryCard";
    import cat1 from "../assets/category1.svg";
    import cat2 from "../assets/category2.svg";
    import cat3 from "../assets/category3.svg";

    const Categories = () => {
    const categories = [
        {
        title: "Handpicked Fruits",
        description: "Juicy and delicious seasonal picks.",
        imageUrl: cat1,
        },
        {
        title: "Delicious Beverages",
        description: "Taste the richness of homemade juices and natural drinks.",
        imageUrl: cat2,
        },
        {
        title: "Gourmet & Essentials",
        description: "Premium dairy, nuts, and healthy snacks.",
        imageUrl: cat3,
        },
    ];

    return (
        <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Discover Freshness in Every Bite
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
            <CategoryCard
                key={index}
                title={category.title}
                description={category.description}
                imageUrl={category.imageUrl}
            />
            ))}
        </div>
        </section>
    );
    };

    export default Categories;
