import { useEffect, useState } from "react"
import { getAllCategories } from "../../../http/categorieRequest"
import { getAllProducts } from "../../../http/productRequest"
import type { ICategories } from "../../../types/ICategories"
import type { IProduct } from "../../../types/IProduct"

export const Filter = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [allProducts, setAllProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState<ICategories[]>([])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const all = await getAllProducts()
            setProducts(all)
            setAllProducts(all)
        }

        const fetchCategories = async () => {
            const all = await getAllCategories()
            setCategories(all)
        }

        fetchProducts()
        fetchCategories()
    }, [])

    const handleCategoryChange = (categoryName: string) => {
        const alreadySelected = selectedCategories.includes(categoryName)
        const newSelected = alreadySelected
            ? selectedCategories.filter((cat) => cat !== categoryName)
            : [...selectedCategories, categoryName]

        setSelectedCategories(newSelected)

        if (newSelected.length === 0) {
            setProducts(allProducts)
        } else {
            const filtered = allProducts.filter((prod) =>
                prod.categoria?.some((cat: any) => newSelected.includes(cat.nombre))
            )
            setProducts(filtered)
        }
    }

    return (
        <div>
            <div>
                <h2>ORDENAR POR</h2>

                <div>
                    <h3>Precio</h3>
                    <ul>
                        <li>Precio mayor</li>
                        <li>Precio menor</li>
                    </ul>
                </div>

                <div>
                    <h3>Categoría</h3>
                    <ul>
                        {categories.map((item) => (
                            <li key={item.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(item.nombre)}
                                        onChange={() => handleCategoryChange(item.nombre)}
                                    />
                                    {item.nombre}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Talle</h3>
                    <ul>
                        {["XS", "S", "M", "L", "XL", "XXL", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"].map((talle) => (
                            <li key={talle}>{talle}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <h2>Productos filtrados:</h2>
                <ul>
                    {products.map((p) => (
                        <li key={p.id}>{p.nombre}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
