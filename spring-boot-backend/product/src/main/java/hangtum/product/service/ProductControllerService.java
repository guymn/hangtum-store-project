package hangtum.product.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hangtum.product.model.Category;
import hangtum.product.model.Product;
import hangtum.product.repository.ProductRepository;

@Service
public class ProductControllerService {
    private final ProductRepository productRepository;
    private final CategotyControllerService categotyControllerService;

    // private final KafkaService kafkaService;

    @Autowired
    public ProductControllerService(ProductRepository productRepository,
            CategotyControllerService categotyControllerService) {
        this.productRepository = productRepository;
        this.categotyControllerService = categotyControllerService;
    }

    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products;
    }

    public Optional<Product> getProductById(Long id) {
        Optional<Product> optProduct = productRepository.findById(id);
        return optProduct;
    }

    public List<Product> getProductByCategoryID(String categoryID) {
        List<Product> products = productRepository.findByCategoryID(categoryID);
        return products;
    }

    public void saveProduct(Product product) {
        productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public void deleteAllProduct() {
        productRepository.deleteAll();
    }

    // public void sendIdToLesson(Long ProductID) {
    // kafkaService.sendProductIdToLesson(ProductID);
    // }
}
