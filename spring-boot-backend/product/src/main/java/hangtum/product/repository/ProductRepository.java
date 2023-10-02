package hangtum.product.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import hangtum.product.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
    public List<Product> findAll();

    public Optional<Product> findById(Long id);

    public boolean existsById(Long id);

    public List<Product> findByCategoryID(String categoryID);

}
