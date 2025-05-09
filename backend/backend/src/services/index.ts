export class ItemService {
    private items: { id: number; name: string }[] = [];

    fetchItems() {
        return this.items;
    }

    saveItem(item: { id: number; name: string }) {
        this.items.push(item);
    }
}