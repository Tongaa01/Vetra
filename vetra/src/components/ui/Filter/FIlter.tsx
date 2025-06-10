import { useEffect, useState, type FC } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { getAllCategories } from "../../../http/categorieRequest"
import { getAllProducts } from "../../../http/productRequest"
import { getAllSizes } from "../../../http/sizeRequest"
import type { ICategories } from "../../../types/ICategories"
import type { IProduct } from "../../../types/IProduct"
import type { ISize } from "../../../types/ISize"
import style from "./Filter.module.css"

export const Filter: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [products, setProducts] = useState<IProduct[]>([])
    const [allProducts, setAllProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState<ICategories[]>([])
    const [sizes, setSizes] = useState<ISize[]>([])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [openSection, setOpenSection] = useState<string | null>(null)

    const navigate = useNavigate()

    const toggleSection = (section: string) => {
        setOpenSection(prev => (prev === section ? null : section))
    }

    const handleParamChange = (paramName: string, paramValue: string) => {
        let found = false
        searchParams.forEach((el) => {
            if (el === paramValue) {
                searchParams.delete(paramName, paramValue)
                found = true
            }
        })
        if (!found) {
            searchParams.append(paramName, paramValue)
        }
        navigate(`/search?${searchParams.toString()}`)
    }

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

    useEffect(() => {
        const precioParam = searchParams.get("precio")

        if (precioParam === "mayor") {
            const ordenado = [...products].sort((a, b) => b.precio - a.precio)
            setProducts(ordenado)
        } else if (precioParam === "menor") {
            const ordenado = [...products].sort((a, b) => a.precio - b.precio)
            setProducts(ordenado)
        }
    }, [searchParams])


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
                prod.categorias?.some((cat: any) => newSelected.includes(cat.nombre))
            )
            setProducts(filtered)
        }
    }

    return (
        <div className={style.filterWrapper}>
            <div className={style.filterSection}>
                <h3 onClick={() => toggleSection("ordenar")} className={style.filterTitle}>
                    Ordenar por
                    <span className={style.arrow}>{openSection === "ordenar" ? "▲" : "▼"}</span>
                </h3>
                {openSection === "ordenar" && (
                    <ul className={style.filterList}>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    onClick={() => handleParamChange("precio", "menor")}
                                />
                                Precio menor
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    onClick={() => handleParamChange("precio", "mayor")}
                                />
                                Precio mayor
                            </label>
                        </li>
                    </ul>
                )}
            </div>

            <div className={style.filterSection}>
                <h3 onClick={() => toggleSection("categoria")} className={style.filterTitle}>
                    Categoría
                    <span className={style.arrow}>{openSection === "categoria" ? "▲" : "▼"}</span>
                </h3>
                {openSection === "categoria" && (
                    <ul className={style.filterList}>
                        {categories.map((item) => (
                            <li key={item.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(item.nombre)}
                                        onChange={() => handleCategoryChange(item.nombre)}
                                        onClick={() =>
                                            handleParamChange("categoria", item.nombre)
                                        }
                                    />
                                    {item.nombre}
                                </label>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className={style.filterSection}>
                <h3 onClick={() => toggleSection("talle")} className={style.filterTitle}>
                    Talle
                    <span className={style.arrow}>{openSection === "talle" ? "▲" : "▼"}</span>
                </h3>
                {openSection === "talle" && (
                    <ul className={style.filterList}>
                        {sizes.map((talle) => (
                            <li key={talle.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        onClick={() =>
                                            handleParamChange("talle", talle.talle)
                                        }
                                    />
                                    {talle.talle}
                                </label>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
