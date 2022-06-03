using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiCrud.DTOs
{
    public class CreateToDoDto
    {
        [Required(ErrorMessage = "Campo Obrigatório")]
        [MaxLength(100, ErrorMessage = "Maximo de 100 caractéres")]
         public string Description { get; set; }
    }
}