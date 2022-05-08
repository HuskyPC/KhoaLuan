using BO.Product;
using DAL.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Product
{
    public class ProductBLL
    {
        //bien toan cuc 
        private ProductDAL productDAL;
        public ProductBLL()
        {
            productDAL = new ProductDAL();
        }
        //home
        public List<ProductBO> getTopNewProduct(int top)
        {
            List<ProductBO> listProduct = productDAL.getTopNewProduct(top);
            return listProduct;
        }
        public List<ProductBO> getProductAll()
        {
            List<ProductBO> listProduct = productDAL.getProductAll();
            return listProduct;
        }
        public List<ProductBO> getProductByBrandID(String brandID)
        {
            List<ProductBO> listProduct = productDAL.getProductByBrandID(brandID);
            return listProduct;
        }
        //sreach product 
        public List<ProductBO> getSearchProductFREETEXT(String keySearch)
        {
            List<ProductBO> listProduct = productDAL.getSearchProductFREETEXT(keySearch);
            return listProduct;
        }
        public List<ProductBO> getSearchProductLike(String keySearch)
        {
            List<ProductBO> listProduct = productDAL.getSearchProductLike(keySearch);
            return listProduct;
        }
        public List<ProductBO> getSearchProductExact(String keySearch)
        {
            List<ProductBO> listProduct = productDAL.getSearchProductExact(keySearch);
            return listProduct;
        }
        public List<ProductBO> getSearchProduct(String keySearch)
        {
            List<ProductBO> listProFre = productDAL.getSearchProductFREETEXT(keySearch);
            List<ProductBO> listProLike = productDAL.getSearchProductLike(keySearch);
            List<ProductBO> listProExa = productDAL.getSearchProductExact(keySearch);
           if (listProLike.Count > 1 )
            {
                listProFre.InsertRange(0, listProLike);
                
                for (int i = listProLike.Count; i < listProFre.Count; i++)
                {
                    for (int j = 0; j < listProLike.Count; j++)
                    {
                        if (listProFre[i].ProductID == listProLike[j].ProductID)
                        {
                            listProFre.Remove(listProFre[i]);
                        }
                    }
                }
                return listProFre;
            }
            else if (listProExa.Count != 0 && listProExa != null)
            {
                listProFre.InsertRange(0, listProExa);
                for (int i = 1; i < listProFre.Count; i++)
                {
                    if (listProFre[i].ProductID == listProExa[0].ProductID)
                    {
                        listProFre.Remove(listProFre[i]);
                    }
                }
                return listProFre;

            }


            return listProFre;
        }

<<<<<<< Updated upstream
        //public List<ProductBO> getProductNewTopX(int SL)
        //{
        //    ProductDAL objProduct = new ProductDAL();
        //    List<ProductBO> listProduct = objProduct.getProductNewTopX(SL);
        //    return listProduct;
        //}
        //public List<ProductBO> getLoadProductByBrandTopX(int SL, string Brand)
        //{
        //    ProductDAL objProduct = new ProductDAL();
        //    List<ProductBO> listProduct = objProduct.getLoadProductByBrandTopX(SL, Brand);
        //    return listProduct;
        //}
=======
        public List<ProductBO> getProductID()
        {
            List<ProductBO> listProduct = productDAL.getProductID();
            return listProduct;
        }
        public List<ProductBO> getProductByID(string productID)
        {
            List<ProductBO> listProduct = productDAL.getProductByID(productID);
            return listProduct;
        }
        public int getMaxID()
        {
            int stt = productDAL.getMaxID();
            return stt;
        }
        public string getProductIDByStt(int stt)
        {
            string productID = productDAL.getProductIDByStt(stt);
            return productID;
        }

        // trang admin
        public async Task<bool> postCreateProduct(ProductBO objproduct)
        {
            objproduct.ProductID = getProductIDByStt(getMaxID());
            var result = await productDAL.postCreateProduct(objproduct);
            
            if (result)
            {
                return true;
                
            }
            return false;
        }
>>>>>>> Stashed changes
    }
}
