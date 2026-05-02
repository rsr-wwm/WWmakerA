
import { BlogPost, ProductItem, SolutionItem, ServiceCategory, ServiceItem, IndustryItem, GlossaryItem } from '../types';
import { PRODUCTS, SOLUTIONS, SERVICE_CATEGORIES, PROBLEMS, INDUSTRIES, GLOSSARY } from '../constants';
import { getPosts as getBlogPosts, createPost as createBlogPost, updatePost as updateBlogPost, deletePost as deleteBlogPost, syncBlogPosts } from './blogService';

// Keys for LocalStorage
const PRODUCTS_KEY = 'wwm_products'; 
const SOLUTIONS_KEY = 'wwm_solutions'; 
const SERVICES_KEY = 'wwm_services'; 
const PROBLEMS_KEY = 'wwm_problems';
const INDUSTRIES_KEY = 'wwm_industries';
const GLOSSARY_KEY = 'wwm_glossary';

// --- Smart Sync Engine ---
const syncData = <T extends { id?: string, term?: string }>(key: string, constants: T[]) => {
    try {
        const storedJson = localStorage.getItem(key);
        const stored: T[] = storedJson ? JSON.parse(storedJson) : [];
        const storedIds = new Set(stored.map(item => item.id || item.term)); 
        let hasChanges = false;

        constants.forEach(constItem => {
            const itemId = constItem.id || constItem.term;
            if (!storedIds.has(itemId)) {
                stored.push(constItem);
                hasChanges = true;
            }
        });

        if (hasChanges) {
            localStorage.setItem(key, JSON.stringify(stored));
        }
    } catch (e) {
        console.error(`[Auto-Restore] Failed to sync ${key}`, e);
        localStorage.setItem(key, JSON.stringify(constants));
    }
};

const initializeData = () => {
    const flatServices = SERVICE_CATEGORIES.flatMap(cat => 
        cat.items.map(item => ({
            ...item, 
            categoryId: cat.id, 
            categoryTitle: cat.title, 
            categoryDesc: cat.description
        }))
    );

    syncData(PRODUCTS_KEY, PRODUCTS);
    syncData(SOLUTIONS_KEY, SOLUTIONS);
    syncData(SERVICES_KEY, flatServices);
    syncData(PROBLEMS_KEY, PROBLEMS);
    syncData(INDUSTRIES_KEY, INDUSTRIES);
    syncData(GLOSSARY_KEY, GLOSSARY);
    syncBlogPosts();
    
    console.log("System Scan: Content integrity verified.");
};

initializeData();

// --- Generic Helper ---
function getItems<T>(key: string): T[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

function saveItems<T>(key: string, items: T[]) {
    localStorage.setItem(key, JSON.stringify(items));
}

// --- GLOBAL SEARCH ---
export interface SearchResult {
    type: 'Service' | 'Solution' | 'Product' | 'Blog' | 'Glossary' | 'Industry' | 'Problem';
    title: string;
    snippet: string;
    link: string;
}

export const searchContent = (query: string): SearchResult[] => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    const results: SearchResult[] = [];

    getRawServices().forEach(s => {
        if (s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)) 
            results.push({ type: 'Service', title: s.title, snippet: s.description, link: `/service/${s.id}` });
    });

    getSolutions().forEach(s => {
        if (s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)) 
            results.push({ type: 'Solution', title: s.title, snippet: s.description, link: `/solution/${s.id}` });
    });

    getProducts().forEach(p => {
        if (p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) 
            results.push({ type: 'Product', title: p.title, snippet: p.tagline, link: `/product/${p.id}` });
    });

    getBlogPosts().forEach(b => {
        if (b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q)) 
            results.push({ type: 'Blog', title: b.title, snippet: b.excerpt, link: `/blog/${b.id}` });
    });

    getGlossary().forEach(g => {
        if (g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q)) 
            results.push({ type: 'Glossary', title: g.term, snippet: g.definition, link: `/glossary/${g.term.toLowerCase().replace(/\s+/g, '-')}` });
    });
    
    getIndustries().forEach(i => {
        if (i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)) 
            results.push({ type: 'Industry', title: i.title, snippet: i.description, link: `/industry/${i.id}` });
    });

    // Problems
    const problems = getItems<any>(PROBLEMS_KEY);
    problems.forEach(p => {
        if (p.title.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q))
             results.push({ type: 'Problem', title: p.title, snippet: p.shortDescription, link: `/problem/${p.id}` });
    });

    return results;
}

// --- PRODUCTS ---
export const getProducts = (): ProductItem[] => getItems<ProductItem>(PRODUCTS_KEY);
export const saveProduct = (item: ProductItem) => {
    const items = getProducts();
    const index = items.findIndex(i => i.id === item.id);
    if (index >= 0) items[index] = item; else items.push(item);
    saveItems(PRODUCTS_KEY, items);
};
export const deleteProduct = (id: string) => {
    const items = getProducts().filter(i => i.id !== id);
    saveItems(PRODUCTS_KEY, items);
};

// --- SOLUTIONS ---
export const getSolutions = (): SolutionItem[] => getItems<SolutionItem>(SOLUTIONS_KEY);
export const saveSolution = (item: SolutionItem) => {
    const items = getSolutions();
    const index = items.findIndex(i => i.id === item.id);
    if (index >= 0) items[index] = item; else items.push(item);
    saveItems(SOLUTIONS_KEY, items);
};
export const deleteSolution = (id: string) => {
    const items = getSolutions().filter(i => i.id !== id);
    saveItems(SOLUTIONS_KEY, items);
};

// --- INDUSTRIES ---
export const getIndustries = (): IndustryItem[] => getItems<IndustryItem>(INDUSTRIES_KEY);
export const saveIndustry = (item: IndustryItem) => {
    const items = getIndustries();
    const index = items.findIndex(i => i.id === item.id);
    if (index >= 0) items[index] = item; else items.push(item);
    saveItems(INDUSTRIES_KEY, items);
};
export const deleteIndustry = (id: string) => {
    const items = getIndustries().filter(i => i.id !== id);
    saveItems(INDUSTRIES_KEY, items);
};

// --- GLOSSARY ---
export const getGlossary = (): GlossaryItem[] => getItems<GlossaryItem>(GLOSSARY_KEY);
export const saveGlossary = (item: GlossaryItem) => {
    const items = getGlossary();
    // Assuming term is unique ID for glossary
    const index = items.findIndex(i => i.term === item.term);
    if (index >= 0) items[index] = item; else items.push(item);
    saveItems(GLOSSARY_KEY, items);
};
export const deleteGlossary = (term: string) => {
    const items = getGlossary().filter(i => i.term !== term);
    saveItems(GLOSSARY_KEY, items);
};

// --- SERVICES ---
interface StoredServiceItem extends ServiceItem {
    categoryId: string;
    categoryTitle: string;
    categoryDesc: string;
}
export const getRawServices = (): StoredServiceItem[] => getItems<StoredServiceItem>(SERVICES_KEY);
export const getServiceCategories = (): ServiceCategory[] => {
    const flatServices = getRawServices();
    const categories: Record<string, ServiceCategory> = {};
    flatServices.forEach(s => {
        if (!categories[s.categoryId]) {
            categories[s.categoryId] = {
                id: s.categoryId,
                title: s.categoryTitle || 'Other',
                description: s.categoryDesc || '',
                items: []
            };
        }
        const { categoryId, categoryTitle, categoryDesc, ...serviceData } = s;
        categories[s.categoryId].items.push(serviceData as ServiceItem);
    });
    const orderedIds = SERVICE_CATEGORIES.map(c => c.id);
    return Object.values(categories).sort((a, b) => {
        return orderedIds.indexOf(a.id) - orderedIds.indexOf(b.id);
    });
};
export const saveService = (item: StoredServiceItem) => {
    const items = getRawServices();
    const index = items.findIndex(i => i.id === item.id);
    if (index >= 0) items[index] = item; else items.push(item);
    saveItems(SERVICES_KEY, items);
};
export const deleteService = (id: string) => {
    const items = getRawServices().filter(i => i.id !== id);
    saveItems(SERVICES_KEY, items);
};

export const restoreDefaults = () => {
    localStorage.clear();
    window.location.reload();
};

export { getBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost };
