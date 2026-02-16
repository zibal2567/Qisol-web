export interface ProductFeature {
    icon: string;
    translationKey: string;
}

export interface Product {
    id: string;
    image: string;
    gallery?: string[];
    translationKey: string;
    features: string[];
}

export const productsConfig: Product = {
    id: "qisol-hydrogel",
    image: "/Image/Product.png",
    gallery: [
        "/Image/Product.png",
        "/Image/Demo.png",
        "/Image/Benefits.png"
    ],
    translationKey: "main",
    features: [
        "dissolvable",
        "healing",
        "antimicrobial",
        "natural",
        "safe",
        "affordable"
    ]
};
