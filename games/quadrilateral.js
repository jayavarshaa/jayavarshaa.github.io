let Hslider, Vslider, RdShape, CpShape1, CpShape2 ;

function setup()
{
  createCanvas(600, 600);
  Hslider = createSlider(1 , 9, 8 )
  Hslider.position(610, 25)
  Hslider.style('width', '160px')
 
 
  Vslider = createSlider(1 , 9, 8)
  Vslider.position(610, 50)
  Vslider.style('width', '160px')
 
  RdShape = createRadio();
  RdShape.option("Rect")
  RdShape.option("RoundRect")
  RdShape.option("Circle")
  RdShape.option("Triangle")
  RdShape.option("Quad")
  RdShape.selected("Triangle")
  RdShape.position(610, 75)
 
  CpShape1 = createColorPicker('#ed225d')
  CpShape1.position(650, 280)
  CpShape1.style("height", "50px")
 
  CpShape2 = createColorPicker('green')
  CpShape2.position(650, 340)
  CpShape2.style("height", "50px")
 
}

function draw()
{
  background(220);

  for(m=0 ; m < Vslider.value() ; m++)
    {
      for (i=0; i < Hslider.value() ; i++)
        {
          if(i%2==1 && m%2==1 )
            {
              fill(CpShape1.color())
            }
          else if(i%2==0 && m%2==0 )
            {
              fill(CpShape1.color())
            }
          else
            {
              fill(CpShape2.color())
            }
          
          if (RdShape.value() == "Rect")
            {
              rect( 60*i+20, 60*m+20, 50 , 50 )
            }
          else if (RdShape.value() == "RoundRect")
            {
              rect( 60*i+20, 60*m+20, 50 , 50 , 10 )
            }
          else if (RdShape.value() == "Circle")
            {
              circle ( 60*i+40, 60*m+40, 50 )
            }    
          else if (RdShape.value() == "Triangle")
          {
            triangle (30+i*65, 75+m*65, 58+i*65, 25+m*65, 86+i*65, 75+m*65)
          }
          else if (RdShape.value() == "Quad")
          {
            quad (38+i*70, 31+m*70, 86+i*70, 20+m*70, 69+i*70, 63+m*70, 30+i*70, 76+m*70)
        }
        }
    }
}