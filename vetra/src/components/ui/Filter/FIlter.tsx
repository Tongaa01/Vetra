import { useEffect, useState } from "react"
import { getAllCategories } from "../../../http/categorieRequest"
import { getAllProducts } from "../../../http/productRequest"
import { getAllSizes } from "../../../http/sizeRequest"
import type { ICategories } from "../../../types/ICategories"
import type { IProduct } from "../../../types/IProduct"
import type { ISize } from "../../../types/ISize"

export const Filter = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [allProducts, setAllProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState<ICategories[]>([])
    const [sizes, setSizes] = useState<ISize[]>([])
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

        const fetchSizes = async () => {
            const all = await getAllSizes()
            setSizes(all)
        }

        fetchProducts()
        fetchCategories()
        fetchSizes()
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
                        <li>
                            <label>
                                <input type="checkbox" />
                                Precio menor
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                Precio mayor
                            </label>
                        </li>
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
                        {sizes.map((talle) => (
                            <li id={talle.id}>
                                <label>
                                    <input type="checkbox" />
                                    {talle.talle}
                                </label>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
