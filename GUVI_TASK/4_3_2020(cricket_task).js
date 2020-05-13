//cricket.html

<html>
<body>
    <script src="match.js" type="text/javascript"></script>
    <div id="team1" style="float: left;width: 50%;" class="text">
        <h1>TEAM 1</h1>
        <table class="list">
            <tr>
                <td>run :</td>
                <td id="run1"></td>
            </tr>
            <tr>
                <td>wicket :</td>
                <td id="wicket1"></td>
            </tr>
            <tr>
                <td>balls left :</td>
                <td id="ball1"></td>
            </tr>
            <button id="bat1" onclick="bat1()" class="btn">Bat</button>
        </table>
    </div>
    <div id="team2" style=" float: right;width: 50%;" class="text">
        <h1>TEAM 2</h1>
        <table class="list">
            <tr>
                <td>run :</td>
                <td id="run2"></td>
            </tr>
            <tr>
                <td>wicket :</td>
                <td id="wicket2"></td>
            </tr>
            <tr>
                <td>balls left :</td>
                <td id="ball2"></td>
            </tr>
            <button id="bat2" onclick="bat2()" class="btn" disabled>Ball</button>
        </table>
</body>
</html>

//match.js

var run = 0;
var count = 0;

class team {
    constructor(wicket, ball, score, tn) {
        this.wicket = wicket;
        this.score = score;
        this.ball = ball;
        this.tn = tn;
    }

    bat() {
        if (this.wicket > 0 && this.ball > 0) {
            //console.log(this.ball, this.wicket);
            var currun = Math.floor(Math.random() * 7);
            this.ball--;
            count++;
            if (currun == 0) {
                this.wicket--;
                count = 0;
            } else {
                this.score += currun;
                if (count == 7) {
                    this.wicket--;
                    this.count = 0;
                }
            }
        }
        var runs = "run" + this.tn;
        var wiks = "wicket" + this.tn;
        var bals = "ball" + this.tn;
        document.getElementById(runs).value = this.score;
        document.getElementById(wiks).innerHTML = 6 - this.wicket;
        document.getElementById(bals).innerHTML = this.ball;
    }


}
var team1 = new team(6, 36, 0, 1);
var team2 = new team(6, 36, 0, 2);

function bat1() {
    if (team1.ball > 0 && team1.wicket > 0) {
        team1.bat();
    } else {
        document.getElementById("bat1").innerHTML = "Ball";
        document.getElementById("bat2").innerHTML = "Bat";
        document.getElementById("bat1").disabled = true;
        document.getElementById("bat2").disabled = false;

    }
}

function bat2() {
    if (team1.score >= team2.score && team2.wicket > 0 && team2.ball > 0) {
        team2.bat();
    } else {
        submit = document.createElement("button");
        submit.setAttribute("onclick", "location.href = 'result.html'");
        submit.setAttribute("class", "submit");
        document.body.appendChild(submit);
        submit.innerHTML = "submit";
        document.getElementById("bat2").disabled = true;
        localStorage.setItem("team1", JSON.stringify(team1));
        localStorage.setItem("team2", JSON.stringify(team2));

    }
}


//result.html

<!DOCTYPE html>
<html>
<body><center>
    <h1>RESULT</h1>
    <h1 id="won"></h1>
    <table id="list"></table>
    <script>
        team1 = JSON.parse(localStorage.getItem('team1'));
        team2 = JSON.parse(localStorage.getItem('team2'));
        if (team1.score > team2.score) {
            var out = "Team1 Won by " + team1.wicket + " wicket";
            document.getElementById("won").innerHTML = out;
        } else if (team1.score < team2.score) {
            var out = "Team2 Won by " + team2.wicket + " wicket";
            document.getElementById("won").innerHTML = out;
        } else {
            document.getElementById("won").innerHTML = "DRAW";
        }
        document.getElementById("list").innerHTML = "Team1=" + team1.score + "	Team2=" + team2.score;
    </script></center>
</body>
</html>
