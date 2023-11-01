import { pb } from "@/entities/pocketBase";
import { useState, useEffect } from "react";

export function FetchCategories () {
    const [categories, setCategories] = useState<any[]>([]);
    
    const fetchCategories = async () => {
        try {
            const categories = await pb.collection('category').getFullList({
                sort: '+title',
            });
            setCategories(categories);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetchCategories();
      }, []);
      return categories
}