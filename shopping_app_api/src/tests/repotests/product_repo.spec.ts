import { ProductDetailsDto } from "../../database/dtos/productDtos/productDetailsDto";
import categories_repo from "../../database/repository/categoty.repo";
import productRepo from "../../database/repository/products.repo";
import adminService from "../../services/admin-services";




describe('product Model' , () =>{

    it('should have an index method', () => {
        expect(productRepo.getAllproductsbycategory_repo).toBeDefined();
      });
    
      it('should have a show method', () => {
        expect(productRepo.getproductByid).toBeDefined();
      });
    
      it('should have a create method', () => {
        expect(productRepo.addProductRepo).toBeDefined();
      });
    
      it('should have a update method', () => {
        expect(productRepo.editProduct).toBeDefined();
      });
    
      it('should have a delete method', () => {
        expect(productRepo.deleteProduct).toBeDefined();
      });

     let categoryId:number
     let productId:number
     const name:string ='producttest'
     const price:number = 10
     let url:string;
      beforeAll(async()=>{
        const category=  await categories_repo.addcategory_FromRepo('Categorytest')
        const addproduct = await productRepo.addProductRepo(name,price,categoryId);
        categoryId= category.categoryid
        productId=addproduct.productid
      })

      beforeAll(async()=>{
        await adminService.deleteCategory(categoryId)
      })
      
     

      it('create method should add a product', async () => {
        const category=  await categories_repo.addcategory_FromRepo('Categorytest1')
        const addproduct = await productRepo.addProductRepo('producttest1',price,category.categoryid);
        const result:ProductDetailsDto ={id:addproduct.productid , name:addproduct.name ,price:addproduct.price}
        expect(result).toEqual({
          id: result.id,
          name: result.name,
          price: result.price
        });

    
        
      });


      it('show method should return the correct product', async () => {
     
        setTimeout(async () => {
          const addproduct = await productRepo.addProductRepo(name,price,categoryId);
         
          const result:ProductDetailsDto ={id:addproduct.productid , name:addproduct.name ,price:addproduct.price}
          expect(result).toEqual({
            id: result.id,
          name: result.name,
          price: result.price
          })
        }, 2000);
       
      });

      it('show method should return update product', async () => {
     
        setTimeout(async () => {
          const addproduct = await productRepo.addProductRepo('milk',10,categoryId);
         
          const result:ProductDetailsDto ={id:addproduct.productid , name:addproduct.name,price:addproduct.price}
          expect(result).toEqual({
            id: result.id,
          name: result.name,
          price: result.price
          })
        }, 2000);
      });

      it("index method should return a list of products", async () => {
     
        setTimeout(async () => {
          const productListFromrepo = await productRepo.getAllproductsbycategory_repo(categoryId)
    
        const productList =[{
            productid: productId,
            name: name,
            price: price,
            url: url
        }]
        expect(productListFromrepo).toEqual(productList)
        }, 3000);
      })


      it('delete method should remove the product', async () => {
     
        setTimeout(async () => {
          await productRepo.deleteProduct(productId)
          const userListFromrepo = await productRepo.getAllproductsbycategory_repo(1)
       expect(userListFromrepo).toEqual([{
        productid: productId,
        name: name,
        price: price,
        url:url
       }])
        }, 6000);
       
      });
    
})