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

import hangtum.product.model.Product;
import hangtum.product.service.ProductControllerService;

@RestController
@RequestMapping("/products")
public class ProductController {
    private final ProductControllerService productControllerService;

    @Autowired
    public ProductController(ProductControllerService productControllerService) {
        this.productControllerService = productControllerService;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productControllerService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Product>> getProductById(@PathVariable Long id) {
        Optional<Product> optProduct = productControllerService.getProductById(id);
        if (!optProduct.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(optProduct);
    }

    @GetMapping("/category/{categoryID}")
    public ResponseEntity<List<Product>> getProductByCategoryID(@PathVariable Long categoryID) {
        List<Product> Products = productControllerService.getProductByCategoryID(categoryID);
        return ResponseEntity.ok(Products);
    }

    @PostMapping
    public ResponseEntity<String> postProduct(@RequestBody Product Product) {
        productControllerService.saveProduct(Product);
        return ResponseEntity.ok("Product was created");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> putProduct(@PathVariable Long id, @RequestBody Product Product) {
        Optional<Product> optProduct = productControllerService.getProductById(id);
        if (!optProduct.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
        Product.setId(id);
        productControllerService.saveProduct(Product);
        return ResponseEntity.ok("Product was updated");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        productControllerService.deleteProduct(id);
        return ResponseEntity.ok("Product was Deleted");
    }

    @DeleteMapping
    public ResponseEntity<String> deleteAllProduct() {
        productControllerService.deleteAllProduct();
        return ResponseEntity.ok("Product was Deleted");
    }
}
