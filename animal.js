

let selecion;
 selecion =prompt('ingrese alguna de las acciones');
 switch(selecion){
     case 'Delfin 🐬':
         document.write("           ,  " );
         document.write('<br>');
         document.write("           __)\_ " );
         document.write('<br>');
         document.write("    (\_.-'    a`  ");
         document.write('<br>');
         document.write("     (/~~````(/~^^`");
       
     break;
     case 'Perro 🐕':
         document.write("            __"); 
         document.write('<br>')
          document.write("      (___()'`;");
          document.write('<br>')
         document.write("      /,    /`");
         document.write('<br>')
         document.write( `     \\"--\\`); 
        

         break;
    case 'Gato 🐈':
    document.write("      /\_/\  (");
    document.write('<br>')
        document.write(" ( ^.^ ) _)");
        document.write('<br>')
        document.write("   \"/  ("); 
        document.write('<br>')
        document.write(" ( | | )");
        document.write('<br>')
       document.write(" (__d b__)");
    
        break;
    case 'Conejo 🐇':
          document.write("                 |  |"); 
          document.write('<br>')
       document.write(" ______|             |  |");
       document.write('<br>')
      document.write(" |    # |, \|/--,_____|__|O___");
      document.write('<br>')
      document.write(" |    # |   ` o  ,____________)");
      document.write('<br>')
      document.write(" |    # |(  c o ,_____o000____)");
      document.write('<br>')
      document.write(" |____#_|'. ,-'`");
      document.write('<br>')
      document.write("        |  /|\"");
        break;
    case 'salir 🙅':
        break;
        default:
            document.write('debe ingresar un valor comprendidoD');
 }