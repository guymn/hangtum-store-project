package hangtum.product.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hangtum.product.model.Item;
import hangtum.product.service.ItemControllerService;

@RestController
@RequestMapping("/items")
public class ItemController {
    private final ItemControllerService itemControllerService;

    @Autowired
    public ItemController(ItemControllerService itemControllerService) {
        this.itemControllerService = itemControllerService;
    }

    @GetMapping
    public ResponseEntity<List<Item>> getAllItems() {
        List<Item> Items = itemControllerService.getAllItems();
        return ResponseEntity.ok(Items);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Item>> getItemById(@PathVariable Long id) {
        Optional<Item> optItem = itemControllerService.getItemById(id);
        if (!optItem.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(optItem);
    }

    @GetMapping("/category/{categoryID}")
    public ResponseEntity<List<Item>> getItemByCategoryID(@PathVariable String categoryID) {
        List<Item> items = itemControllerService.getItemByCategoryID(categoryID);
        return ResponseEntity.ok(items);
    }

    @PostMapping
    public ResponseEntity<String> postItem(@RequestBody Item item) {
        itemControllerService.saveItem(item);
        return ResponseEntity.ok("Item was created");
    }

    // @PostMapping("/create/lesson/{ItemID}")
    // public ResponseEntity<String> postLessonIdItem(@PathVariable Long ItemID) {
    // itemControllerService.sendIdToLesson(ItemID);
    // return ResponseEntity.ok("ItemID was send");
    // }

    @PutMapping("/{id}")
    public ResponseEntity<String> putItem(@PathVariable Long id, @RequestBody Item item) {
        Optional<Item> optItem = itemControllerService.getItemById(id);
        if (!optItem.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item not found");
        }
        item.setId(id);
        itemControllerService.saveItem(item);
        return ResponseEntity.ok("Item was updated");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteItem(@PathVariable Long id) {
        itemControllerService.deleteItem(id);
        return ResponseEntity.ok("Item was Deleted");
    }

    @DeleteMapping
    public ResponseEntity<String> deleteAllItem() {
        itemControllerService.deleteAllItem();
        return ResponseEntity.ok("Item was Deleted");
    }
}
