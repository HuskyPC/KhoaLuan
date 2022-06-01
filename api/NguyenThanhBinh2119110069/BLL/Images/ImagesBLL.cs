using DAL.Images;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Images
{
    public class ImagesBLL
    { 
        private ImagesDAL imagesDAL;
        public ImagesBLL()
        {
            imagesDAL = new ImagesDAL();
        }
        public bool insertImages(string ImageID, string avatar)
        {
            return imagesDAL.insertImages(ImageID, avatar);
        }
        public int MaxSTTImages()
        {
            return imagesDAL.MaxSTTImages();
        }
        public string getNewImagesIDbySTT(int a)
        {
            return imagesDAL.getNewImagesIDbySTT(a);
        }
    }
}
