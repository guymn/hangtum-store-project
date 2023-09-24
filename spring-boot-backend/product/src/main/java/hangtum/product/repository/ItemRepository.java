package hangtum.product.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import hangtum.product.model.Item;


public interface ItemRepository extends CrudRepository<Item, Long> {
    public List<Item> findAll();

    public Optional<Item> findById(Long id);

    public boolean existsById(Long id);

    public List<Item> findByCategoryID(String categoryID);

}
