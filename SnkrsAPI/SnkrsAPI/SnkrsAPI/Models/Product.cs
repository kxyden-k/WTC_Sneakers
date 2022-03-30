namespace SnkrsAPI.Models
{
    public class Product
    {
        public int Id { get; set; }

        public string SneakerId { get; set; }

        public string Name { get; set; }

        public string Title { get; set; }

        public string Shoe { get; set; }

        public string Gender { get; set; }

        public Brands Brand { get; set; } 

        public string ColorWay { get; set; }

        public string ReleaseDate { get; set; }

        public int RetailPrice { get; set; }

        public int ReleaseYear { get; set; }

        public string SellerEmail { get; set; }

        public string SellerUsername { get; set; }

        public string ImageUrl { get; set; }

        public string SmallIImageUrl { get; set; }

        public string ThumbImageUrl { get; set; }

    }
}
