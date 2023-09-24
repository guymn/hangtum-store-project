package hangtum.product.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hangtum.product.model.Category;
import hangtum.product.repository.CategoryRepository;


@Service
public class CategotyControllerService {
    private final CategoryRepository categoryRepository;

    @Autowired
    public CategotyControllerService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategory() {
        List<Category> categories = categoryRepository.findAll();
        return categories;
    }

    public Optional<Category> getCategoryById(Long id) {
        Optional<Category> optCategory = categoryRepository.findById(id);
        return optCategory;
    }

    public void saveCategory(Category category) {
        categoryRepository.save(category);
    }
    
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    public void deleteAllCategory() {
        categoryRepository.deleteAll();
    }

}
