
<!DOCTYPE html>

<html lang="en" dir="ltr">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>  
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <meta charset="UTF-8">
    <title>Forma1</title>
    <link rel="stylesheet" href="style.css">
     <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
      
   </head>
<body> 

  <div class="container">
    <div class="title"> Înregistrarea</div>
    <div class="content">

      <div class = "validation-form">
      <form action="connect.php" method = "POST" id="myForm">

        <div class="user-details">
          <div class="input-box" >
            <span class="details">Numele</span>
            <input type="text"  id="firstName" name="firstName" placeholder="Introduceți numele dmv" required>
            <div class="error-text" id="firstNameError"></div>
          </div>
          <div class="input-box">
            <span class="details">Prenume</span>
            <input type="text"  id="lastName" name="lastName" placeholder="Introduceți prenumele dmv" required>
            <div class="error-text" id="lastNameError"></div>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" id="email" name="email" placeholder="@Email.com" required>
            <div class="error-text" id="emailError"></div>
          </div>
          <div class="input-box">
            <span class="details">Nr. de telefon</span>
            <input type="text"  id="phonenumb" name="phonenumb" placeholder="+373-" required>
            <div class="error-text" id="phonenumbError"></div>
          </div>
          <div class="input-box">
            <span class="details">Adresa de Domiciliu</span>
            <input type="text" id="adress" placeholder="Adresa" name ="address" required>
          </div>
        </div> <br />   

        <div class="container-fluid">
          <div class="form-group col-sm-8">
            <label for="pr">Profesia</label>
            <select id="pr" class="form-select" name="profesia">
            <option value="" selected></option>
            <option value="air traffic controller">air traffic controller</option>
            <option value="banker">banker</option>
            <option value="builder">builder</option>
            <option value="judge">judge</option>
            <option value="salesman">salesman</option>
            <option value="nutritionist">nutritionist</option>
            </select>
          </div>

        </div>
        <div class="Gender-ul">
          <input type="radio" id="dot-1">
          <input type="radio" id="dot-2">
          <input type="radio" id="dot-3">
          <span class="gender-title">Gender-ul dmv</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Bărbat</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Femeie</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Alta variantă</span>
            </label>
          </div>
        </div>   
        
        <div class="wrapper">
          <div id="survey_options">
          <br />
                <span class="details">Adăgați retelele de socializare:</span>
                <input type="text" id="social" name="link" class="survey_options" size="50" placeholder="https://-">
                <div class="error-text" id="socialError"></div>
          </div>
      
          <div class="controls">
            <a href="#" id="addmore_fields"><i class="fa fa-plus"></i>Add More</a>
            <a href="#" id="remove_fields"><i class="fa fa-plus"></i>Remove Field</a>
          </div>
        </div>
      <br />

 <button class="button-48" onclick="hideET()" id="button-48" role="button"><span class="text"></span></button>
      <div class="container1"  id="container1" >
       
        <div class="title">Studiile anterioare</div>
        <div id="content">
                <div class="input-box1" >
                  <span class="details">Titlul Educatiei</span>
                  <input type="text"  id="edtype" name="edname" placeholder="Education Ttile" required>
                  <div class="error-text" id="edtypeNameError"></div>
                </div>
    
                <div class="container-fluid">
                  <div class="form-group col-sm-8">
                    <label for="dur">Tipul Educatiei</label>
                    <select id="dur" class="form-select" name="edType">
                    <option value=""></option>
                    <option value="Primary education">Primary education</option>
                    <option value="Upper secondary education">Upper secondary education</option>
                    <option value="Short-cycle tertiary education">Short-cycle tertiary education</option>
                    <option value="Primary education">Primary education</option>
                    <option value="Short-cycle tertiary education">Short-cycle tertiary education</option>
                    <option value="Bachelor or equivalent">Bachelor's or equivalent</option>
                    </select>
                  </div>
                </div>
              <br> 
              <div class="calendar">
              <label for  ="graduation"><br>Data terminarii: <br></label>
              <input type="date" id="graduation" name="graduation"><br> <br>
    </div>
              <div class="add-button-container">
                <button type="button" class="btn btn-warning" id="add-button">Save</button>
                <button type="button" class="btn btn-warning1" id="remove-button">Remove Field</button>
            
              </div>
            </div>
            <ul id="records-list"></ul>
        </div>
<br /> <br /> 
<button class="button-48" onclick="hideJN()" id="button-49" role="button"><span class="text"></span></button>

          <div class="container2" id="container2" >

                    <div class="title">Experienta de lucru anterioara</div>
                    <div class="content"><br /> 
        

                    <div class="container-fluid">
                      <div class="form-group col-sm-8">
                        <label for="dl">Denumirea Lucrului</label>
                        <select id="dl" name="dl" class="form-select">
                        <option value=""></option>
                        <option value="postman">Postman</option>
                        <option value="veterinar">Veterinar</option>
                        <option value="actor">Actor</option>
                        <option value="programmer">programmer</option>
                        <option value="pilot">pilot</option>
                        <option value="sofer">sofer</option>
                        </select>
                      </div>
        
                    </div>

                  <div class="container-fluid">
                    <div class="form-group col-sm-8">
                      <label for="dor">Denumirea Orașului</label>
                      <select  id="dor" name="dor" name="city">
                        <option value=""></option>
                        <option value="chisinau">Chisinau</option>
                        <option value="balti">Balti</option>
                        <option value="orhei">Orhei</option>
                        <option value="soroca">Soroca</option>
                        <option value="nisporeni">Nisporeni</option>
                        <option value="ungheni">Ungheni</option>
                      </select>
                    </div>
                  </div>

                    <div class="container-fluid">
                      <div class="form-group col-sm-8">
                        <label for="dc">Denumirea Companiei</label>
                        <select id="dc" name="dc" class="dc" >
                        <option value=""></option>
                        <option value="glovo">Glovo</option>
                        <option value="aliexpress">Aliexpress</option>
                        <option value="fedex">Fedex</option>
                        <option value="tnt">TNT</option>
                        <option value="dhl">DHL</option>
                        <option value="posta-moldovei">Posta moldovei</option>
                        </select>
                      </div>
                    </div>

                      <div>
                    <label for="start-job"><br />Data inceperii/finalizarii: <br /></label>
                  <input type="date" id="start-job" name="startJob">
                  <input type="date" id="finish-job" name="finishJob" ><br /> <br />
                  <br /> 
                </div>
              </div>
              <div class="add-button-container">
                <button type="button" class="btn btn-warning" id="add-buttonjn">Save</button>
                <button type="button" class="btn btn-warning1" id="remove-buttonjn">Remove Field</button>
              </div>
            
            <ul id="jobname-list"></ul>
            </div>
          <div class="button">
            <button type="submit" id="button-save">Salveaza</button>
            <br>
          </div>
        </div>

    </div>
  </div>
</div>
</script>
</form> 

<script src="formFun.js"></script>
<script src="actions.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
  <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>

</div>
<div class="col-md-4"></div>
</div>
</body> 

</html>
      