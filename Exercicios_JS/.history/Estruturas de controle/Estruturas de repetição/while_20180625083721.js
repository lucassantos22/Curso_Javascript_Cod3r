function getInteiroAleatorioEntre(){
    
}'use strict';

const { Action, CrawlerError, ClientHelper  } = require('web-crawler-lib');
const { By, until } = require("web-crawler-lib/selenium");
const URL = 'https://intranet.digitro.com.br/';

class AniversariantesAction extends Action {

    constructor(requestData) {
        const additional = requestData.additional;
        super(URL, 'ANIVERSARIANTES', additional.usuario);
        this._usuario = additional.usuario;
        this._senha = additional.senha;
        this.area = additional.area;
        this.flag = 0;
    }

    steps() {
        this.validateRequest();       
        this.goToPage();
        this.login();
        this.areaValidator();
        this.collector();
    }

    goToPage() {
        this.navigateToPage(By.xpath('//frame[@name="dgtmenu"]'));
    }

    validateRequest() {
        this.loggerDebug('Validando a requisição');
        if(!this._usuario) throw new CrawlerError(`Parâmetro 'usuário' é obrigatório`, 400);
        if(!this._senha) throw new CrawlerError(`Parâmetro 'senha' é obrigatório`, 400);
    }

    login() {
        this.loggerDebug('Efetuando o login');
        this.driver.switchTo().frame("dgtmenu"); 
        this.driver.findElement(By.xpath('(//select[@class="dropdown"])[2]')).click();
        this.driver.findElement(By.xpath('(//select[@class="dropdown"])[2]//option[contains(text(),"Login")]')).click();
        this.driver.findElement(By.xpath('(//select[@class="dropdown"])[2]')).click();

        this.driver.switchTo().defaultContent();
        this.driver.switchTo().frame("dgtbody"); 

        this.driver.wait(until.elementsLocated(By.id('username')), 5000);
        this.driver.findElement(By.id('username')).then(element => element.sendKeys(this._usuario));
        this.driver.findElement(By.id('password')).then(element => element.sendKeys(this._senha));
        this.driver.findElement(By.xpath('//input[@type="submit"]')).click();
        this.driver.sleep(3000);
    }

    areaValidator(){
        if(!this.area){
            this.loggerDebug('Indo em direção ao collector');
        }else{
            this.driver.switchTo().defaultContent();
            this.driver.switchTo().frame("dgtbody"); 
            this.driver.findElement(By.xpath('//form[@name="form1"]//a')).click();
            this.driver.wait(until.elementLocated(By.xpath('//a/font[contains(text(),"Áreas")]')), 5000);
            this.driver.findElement(By.xpath('//a/font[contains(text(),"Áreas")]')).click();
    
            this.driver.sleep(3000);
            this.driver.findElements(By.xpath('//div[@class="sigla"]/a')).then(nomesAreas=>{
                for (const nomeArea of nomesAreas){
                    nomeArea.getText().then(nome =>{
                        if(this.area == nome){
                            this.flag = 1;
                        }
                    });
                }
            });

            this.executeInFlow(()=>{

                if(this.flag==0){
                    throw new CrawlerError("Parâmetro 'área' não encontrado", 404);    
                }

            });     

            this.driver.get('https://intranet.digitro.com.br/');
        }
    }
    

    collector() { 
        this.loggerDebug('Recuperando datas de anioversário');
        this.driver.get('https://intranet.digitro.com.br/rtr/rtr-aniversariantes.php');
        
        this.driver.findElement(By.xpath('//td[@class="frasebold" and contains(text(),"Aniversariantes do Mês de")]')).getText().then(month=>{
            this.monthText = month.replace('Aniversariantes do Mês de ','').trim();
        });

        this.driver.wait(until.elementsLocated(By.xpath('//table[@width="600"]/tbody')));

        this.driver.findElements(By.xpath('(//table//tbody)[4]')).then(table => {
            ClientHelper.convertTableOnObject(this.driver,table[0],['birthdayPerson','birthdayDate','department']).then(
                elementFound =>{
                    if(elementFound.length>0){
                        if(!this.area){

                            let result = elementFound.reduce((result, elem, index) => {
                                if (index > 0) {
                                    result.push({
                                        'month' : this.monthText,
                                        'monthDay' : Number(elem.birthdayDate.split(' - ')[0]),
                                        'weekDay' : elem.birthdayDate.split(' - ')[1],
                                        'birthdayPerson' : elem.birthdayPerson,
                                        'department' : elem.department
                                    });
                                } 
                                return result;
                            }, []);
                            
                            this.finishAction(result);
                            this.loggerDebug('Itens encontrados.');
                        }else{
                            this.arrayFilter = elementFound.filter((element)=>{
                                return element.department == this.area;
                            });

                            let result = this.arrayFilter.map(elem => {
                                return {
                                    'month' : this.monthText,
                                    'monthDay' : Number(elem.birthdayDate.split(' - ')[0]),
                                    'weekDay' : elem.birthdayDate.split(' - ')[1],
                                    'birthdayPerson' : elem.birthdayPerson,
                                    'department' : elem.department
                                };
                            });

                            this.finishAction(result);
                            this.loggerDebug('Itens encontrados.');
                        }
                    }else{
                        this.finishActionNoContent();
                    }
                }              
            );  
        });  

    }

    /** ======================================= Override ======================================= */

    static getMainActions(requestData) {
        return super.getMainActionsImpl(requestData, AniversariantesAction);
    }

}
//option[@value="/amx/amx-inclusao-nr-serie.php3|_blank"]
module.exports = AniversariantesAction;
