
import React from 'react';
export {chapters};

class Chapter extends React.Component{

    constructor(seed,ch){
        super();
        this.seed = seed;
        this.ch = ch;
    }
}

    const chapters = [

        chapterOne = new Chapter('A',[
           ['Bio jednom jedan prasac. '],
           ['Živeo je u  '],
           ['kolibi od blata na obodu močvare. ','izdubljenom drvetu u sred močvare. ','kućici od trske na kraju močvare. '],
           ['Mnogo je voleo da '],
           ['peca ','posmatra ptice ','se izležava na kauču'],
           ['ali nije imao puno vremena za to. '],
           ['jer je po ceo dan radio na građevini. ',' ,po ceo dan je delio je poštu ostalim stanovnicima močvare jer je radio u močvarskoj pošti.',
           ' jer je preko celog dana tražio drago kamenje po mulju močvare u nadi da će se obogatiti.'],
           ['Ali jednoga dana '],
           ['dok je ćekao u redu u močvarskom supermarketu shvatio je koliko mu je život dosadan i monoton.',
           'ležeći na kauču se zapitao "hm, da li je život bolji van ove močvare".',
           'gacajući do kuće po mulju je shvatio da močvara nije dovoljno prljava za jednog prasca.'],
           ['"Moram da odem odavde" reče sebi prasac. \n \n']
       ]),
        chapterTwoA = new Chapter('AA',[
           ['Od komšinice veverice čuo je da se njen zet daždevnjak preselio u obližnji grad i da lepo živi ',
           'Vepar koga prasac poznaje od školskih dana mu je redovno pisao iz obližnjeg grada."Nije sjajno ali bar nema toliko vlage" tvrdio je vepar'
           ,'Prasac je čitao u "Močvarskoj Gzeti" da su cene kirija u gradu krenule da padaju '],
           ['a i otvorio se cirkus sa zmajevima, prasac je voleo cirkus.'],
           ['i zato je odlučio da spakuje svoje kofere i da se preseli u grad. ',
           '. Prasac je sutradan spakovao to malo stvari koje poseduje i zaputio se ka gradu.'],
           ['Nakon dva sata vožnje Aligator Expresom stigao je u grad. ','Nakon pola sata letenja Fazan Expresom stigao je u grad.'],
           ['Stara komšinica veverica mu je pomogla da se snađe oko stana. ','Stari prijatelj vepar mu je pomogo da nađe stan blizu centra. '],
           ['Stanodavac je bio strašan zmaj koji bi spržio svakog ko mu ne da kiriju na vreme. '],
           ['Nakon mesec dana bezuspešne potrage za poslom došao je dan za naplatu kirije.',
           'Prasac je narednih mesec dana proveo u obilasku cirkusa i finih restorana, tako je potrošio sav novac predviđen za kiriju. '],
           ['Ne želeći da ga zmaj sprži prasac se požali komšiji jazavcu. '],
           ['Pošto je jazavac smatrao da je kirija previsoka dao je prascu sledeći savet. ',
           'Jazavac je uvideo svoju priliku da se reši zmaja i plaćanja pa rece prascu. \n \n']
           
       ]),
        chapterThreeAA = new Chapter('AAA',[
           ['"Moraš da siđeš u kanalizaciju, tamo ćeš naći magničnog pacova. Jedino je njegova magija dovoljno jaka da savlada zmaja".'],
           ['Uze prasac svoje verne močvarske čizme i zaputi se ka najbližem šahtu.  ',
           'Vrati se prasac do stana po svoju vernu beterisku lampu i zaputi se u kanalizaciju. '],
           ['Nakon tri sata tumaranja kroz kanalizaciju ugledao je'],
           ['mala vratanca na kojim piše "magični pacov". ','otvor u cevi iz koje je probijala svetlost i zvuci magije. '],
           ['"O moćni pacove treba mi tvoja pomoć da se rešimjednog zmaja" povika prasac.'],
           ['"Može za 200 grama gaude"reče pacov. ','"a šta ja imam od toga ?"upita pacov. '],
           ['"Daću ti sve što poželiš samo mi pomozi" reče prase. Pristade pacov i krenuše ka zmajevoj jazbini.'],
           ['Kad su došli do jazbine zmaj ih je ugljenisao u trenu jer magija pacova zapravo nije bila toliko jaka. Jazavac je morao da plaća još skuplju kiriju jer im je dao ideju',
           'Kad su došli do jazbine pacov je svojom moćnom magijom lako savladao zmaja. Prasac i jazavac su nastavili da žive bez kirije a pacov je uživao u siru koji je dobio od prasca'],
           ['KRAJ!']
       ]),
        chapterTwoAB = new Chapter('AAB',[
           ['"Moraš da se popnež na radio toranj i da uzmeš jaje od svrake iz gnezda, zmaj je alergičan.'],
           ['Uze prasac svoje naočare za sunce da ga sunce ne oslepi dok se penje i zaputi se ka radio tornju.',
           'Vrati se prasac do stana po svoje patike za planinarenje i pohita ka tornju.'],
           ['Kada je stigao do tornja shvatio je da ga čeka veliki posao. ',
           'Iako je imao veliki strah od visine znao je da  je ovo jedini način da se reši zmaja. '],
           ['Dok se peo'],
           ['pazio je na rđavu konstrukciju starig radio tornja.','držao se čvrsto jer je vetar krenuo da jača.'],
           ['Pre nego što je stigo do svrakinog gnezda susrela ga je na pola puta.'],
           ['"Šta tražiš na ovoj visini prašče ?"','"Moja si jaja krenuo da kradeš jeli ?"'],
           ['Reče svraka.'],
           ['"Molim te, treba mi samo jedno jaje da ubijem zmaja" reče prasac. Svraka je odmah pristala jer ni ona nije volela zmaja.',
           'Prasac otera svraku agresivnim zvucima i mahanjem rukama.'],
           ['Kada se vratio u stan sa jajetom odmah je pozvao zmaja na avokado tost sa svrakinim jajetom'],
           ['ali zmaj je prepoznao svračije jaje i za tren ugljenisao prasca',
           '. Zmaj u trenu proguta onaj tost i nesta u oblaku prašine i magočnih konfeta.'],
           [' KRAJ! ']
       ]),
        chapterTwoB = new Chapter('AB',[
           ['Od prijatelja pelikana je čuo da u šumi ima dosta voća po drveću a ponekd i po podu.',
           'Često bi na putu do kuće zastao da se divi krošnjama drveća obližnje šume. ',
           'Svakoga jutra bi ga probudila pesma ptica iz obližnje šume. '],
           ['"Možda je pravi trenutak da se preselim u šumu" pomisli prasac.',
           'Jednoga dana dok je gacao po močvari zaglavila mu se papuča u blatu i tu je odlučio da se definitivno seli u šumu. '],
           ['Sutradan se prasac zaputi ka šumi. '],
           ['za sobom je ostavio '],
           ['dom sa IKEA ugaonom garniturom pozicioniranom ispred starog TV-a.',
           'praznjikav Obodin frižider. Ključeve je ostavio kod komšinice veverice da mu zaliva biljke dok nije tu. '],
           ['Nakon pola sata hodanja prasac je stigao u šumu.'],
           ['Čim je stigao zastao je da se divi zelenim krošnjama, ovog puta izbliza. ',
           'Čim je stigao osetio je jak miris šumskog cveća na kakav nije navikao u močvari. '],
           ['Nije se dugo divio lepoti šume jer ga je putovanje načinilo gladnim.',
           'Nakon kraćeg upijanja boja,mirisa i zvukova šume prasac je odlučio da nešto čalabrcne'],
           ['Ugleda prasac puno drvo jabuka koje tek tako rastu i potpuno su besplatne te krenu ždrati. ',
           'Miris roštilja ga je doveo do šumskog grill majstora pelikana i imao je tek toliko novca kod sebe da prijusti jednu sočnu gurmansku. ',
           'Pošto je primetio da oko njega zuji mnogo pčela zaključio je da je i košnica u blizini, ubrzo je našao i naždrao se kao prasac kakav jeste'],
           ['Nakon obilnog obroka krenuo je da tumara šumom u potrazi za mestom za spavanje',
           'Prascu je pozlilo od obilnog obroka pa je krenuo da mahnito trči po šumi ne bi li pronašao mesto gde če da se olakša']

       ]),
        chapterThreeBA = new Chapter('ABA',[
            ['Radovi u toku ']
       ]),
        chapterThtreeBB = new Chapter('ABB',[
           ['Radovi u toku ']
       ]),
   ]
   
   



