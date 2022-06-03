using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiCrud.Models
{
    public class ToDo
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Campo obrigatório!")]
        [MaxLength(100, ErrorMessage = "Máximo 100 caractéres")]
        public string Description { get; set; }
        public bool Status { get; set; } = true;
        public DateTime Created_at { get; set; } = DateTime.Now;
        public DateTime Updated_at { get; set; } = DateTime.Now;
    }
}