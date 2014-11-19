define(['jquery'], function ($) {
	var testPokemon = [{"name":"Weedle","type1":"6","type2":"3","hp":"79","atk":"103","def":"120","satk":"135","sdef":"115","spd":"78"},{"name":"Nidoking","type1":"3","type2":"4","hp":"75","atk":"100","def":"110","satk":"45","sdef":"55","spd":"65"},{"name":"Haunter","type1":"7","type2":"3","hp":"60","atk":"110","def":"70","satk":"60","sdef":"60","spd":"100"},{"name":"Dustox","type1":"6","type2":"3","hp":"100","atk":"164","def":"150","satk":"95","sdef":"120","spd":"71"},{"name":"Skuntank","type1":"3","type2":"16","hp":"95","atk":"109","def":"105","satk":"75","sdef":"85","spd":"56"},{"name":"Skorupi","type1":"3","type2":"6","hp":"80","atk":"120","def":"79","satk":"95","sdef":"79","spd":"70"},{"name":"Toxicroak","type1":"3","type2":"1","hp":"67","atk":"125","def":"40","satk":"30","sdef":"30","spd":"58"},{"name":"Whirlipede","type1":"6","type2":"3","hp":"110","atk":"160","def":"110","satk":"80","sdef":"110","spd":"100"},{"name":"Scolipede","type1":"6","type2":"3","hp":"150","atk":"100","def":"120","satk":"100","sdef":"120","spd":"90"},{"name":"Trubbish","type1":"3","type2":"18","hp":"85","atk":"110","def":"90","satk":"45","sdef":"90","spd":"80"},{"name":"Foongus","type1":"11","type2":"3","hp":"110","atk":"135","def":"60","satk":"50","sdef":"65","spd":"88"},{"name":"Skrelp","type1":"3","type2":"10","hp":"100","atk":"123","def":"75","satk":"57","sdef":"75","spd":"80"}];
	var testMoves = [{"id":"29","name":"Headbutt","accuracy":"100","power":"70","pp":"15","type":"0","description":"Has a 30% chance to flinch."},{"id":"33","name":"Tackle","accuracy":"100","power":"50","pp":"35","type":"0","description":"Inflicts regular damage with no additional effect."},{"id":"34","name":"Body Slam","accuracy":"100","power":"85","pp":"15","type":"0","description":"Has a 30% chance to paralyze the target."},{"id":"37","name":"Thrash","accuracy":"100","power":"120","pp":"10","type":"0","description":"User cannot select another attack or switch for 2-3 turns, then the user becomes confused."},{"id":"38","name":"Double-Edge","accuracy":"100","power":"120","pp":"15","type":"0","description":"User receives 1\/3 the damage inflicted as recoil."},{"id":"43","name":"Leer","accuracy":"100","power":"0","pp":"30","type":"0","description":"Lowers the targets Defense by one stage."},{"id":"44","name":"Bite","accuracy":"100","power":"60","pp":"25","type":"16","description":"Has a 30% chance to flinch."},{"id":"46","name":"Roar","accuracy":"101","power":"0","pp":"20","type":"0","description":"Forces target to switch with a random teammate."},{"id":"53","name":"Flamethrower","accuracy":"100","power":"90","pp":"15","type":"9","description":"Has a 10% chance to burn the target."},{"id":"56","name":"Hydro Pump","accuracy":"80","power":"110","pp":"5","type":"10","description":"Inflicts regular damage with no additional effect."},{"id":"57","name":"Surf","accuracy":"100","power":"90","pp":"15","type":"10","description":"Can hit and has double power against Diving targets."},{"id":"58","name":"Ice Beam","accuracy":"100","power":"90","pp":"10","type":"14","description":"Has a 10% chance to freeze the target."},{"id":"59","name":"Blizzard","accuracy":"70","power":"110","pp":"5","type":"14","description":"Has a 10% chance to freeze the target. Has perfect acc in hail."},{"id":"63","name":"Hyper Beam","accuracy":"90","power":"150","pp":"5","type":"0","description":"User cannot attack or switch the turn after using this attack."},{"id":"70","name":"Strength","accuracy":"100","power":"80","pp":"15","type":"0","description":"Inflicts regular damage with no additional effect."},{"id":"82","name":"Dragon Rage","accuracy":"100","power":"1","pp":"10","type":"15","description":"Does 40 damage to target."},{"id":"85","name":"Thunderbolt","accuracy":"100","power":"90","pp":"15","type":"12","description":"Has a 10% chance to paralyze the target."},{"id":"86","name":"Thunder Wave","accuracy":"100","power":"0","pp":"20","type":"12","description":"Paralyzes the target."},{"id":"87","name":"Thunder","accuracy":"70","power":"110","pp":"10","type":"12","description":"Has a 30% chance to paralyze the target. Has perfect acc in Rain, 50% in Sun."},{"id":"89","name":"Earthquake","accuracy":"100","power":"100","pp":"10","type":"4","description":"Can hit and has double power against Digging targets."},{"id":"92","name":"Toxic","accuracy":"90","power":"0","pp":"10","type":"3","description":"Badly poisons the target."},{"id":"102","name":"Mimic","accuracy":"101","power":"0","pp":"10","type":"0","description":"Copies the targets last used move into Mimics moveslot until user leaves the field."},{"id":"104","name":"Double Team","accuracy":"101","power":"0","pp":"15","type":"0","description":"Raises the users evasion by one stage."},{"id":"126","name":"Fire Blast","accuracy":"85","power":"110","pp":"5","type":"9","description":"Has a 10% chance to burn the target."},{"id":"127","name":"Waterfall","accuracy":"100","power":"80","pp":"15","type":"10","description":"Has a 20% chance to flinch."},{"id":"150","name":"Splash","accuracy":"101","power":"0","pp":"40","type":"0","description":"Its just a splash... Has no effect whatsoever."},{"id":"156","name":"Rest","accuracy":"101","power":"0","pp":"10","type":"13","description":"User falls asleep for two turns, healing major status and all HP."},{"id":"164","name":"Substitute","accuracy":"101","power":"0","pp":"10","type":"0","description":"Creates a Substitute using 1\/4 of the users max HP, protecting the user from damage and effects until it breaks."},{"id":"173","name":"Snore","accuracy":"100","power":"50","pp":"15","type":"0","description":"Has a 30% chance to flinch. Fails unless user is asleep."},{"id":"175","name":"Flail","accuracy":"100","power":"1","pp":"15","type":"0","description":"Has more power when the user has less HP remaining, with a maximum of 200 power."},{"id":"180","name":"Spite","accuracy":"100","power":"0","pp":"10","type":"7","description":"Lowers the PP of the targets last used move by four."},{"id":"182","name":"Protect","accuracy":"101","power":"0","pp":"10","type":"0","description":"Prevents attacks from hitting the user this turn. 50% chance to fail if used last turn."},{"id":"196","name":"Icy Wind","accuracy":"95","power":"55","pp":"15","type":"14","description":"Lowers the targets Speed by one stage."},{"id":"200","name":"Outrage","accuracy":"100","power":"120","pp":"10","type":"15","description":"User cannot select another attack or switch for 2-3 turns, then the user becomes confused."},{"id":"201","name":"Sandstorm","accuracy":"101","power":"0","pp":"10","type":"5","description":"Changes the weather to a sandstorm for five turns."},{"id":"203","name":"Endure","accuracy":"101","power":"0","pp":"10","type":"0","description":"Leaves the user with 1 HP if it would be KOed this turn. 50% chance to fail if used last turn."},{"id":"207","name":"Swagger","accuracy":"90","power":"0","pp":"15","type":"0","description":"Confuses the target and raises its Attack by two stages."},{"id":"213","name":"Attract","accuracy":"100","power":"0","pp":"15","type":"0","description":"If target is opposite gender to user, infatuates target."},{"id":"214","name":"Sleep Talk","accuracy":"101","power":"0","pp":"10","type":"0","description":"Randomly uses one of the users other moves. Fails unless user is asleep."},{"id":"216","name":"Return","accuracy":"100","power":"1","pp":"20","type":"0","description":"Higher power if user has high happiness, up to a maximum of 102."},{"id":"218","name":"Frustration","accuracy":"100","power":"1","pp":"20","type":"0","description":"Higher power if user has low happiness, up to a maximum of 102."},{"id":"231","name":"Iron Tail","accuracy":"75","power":"100","pp":"15","type":"8","description":"Has a 30% chance to lower the targets Defense by one stage."},{"id":"237","name":"Hidden Power","accuracy":"100","power":"60","pp":"15","type":"0","description":"Power and type depend upon users IVs."},{"id":"239","name":"Twister","accuracy":"100","power":"40","pp":"20","type":"15","description":"Has a 20% chance to flinch."},{"id":"240","name":"Rain Dance","accuracy":"101","power":"0","pp":"5","type":"10","description":"Changes the weather to rain for five turns."},{"id":"249","name":"Rock Smash","accuracy":"100","power":"40","pp":"15","type":"1","description":"Has a 50% chance to lower the targets Defense by one stage."},{"id":"250","name":"Whirlpool","accuracy":"85","power":"35","pp":"15","type":"10","description":"Target cannot switch and takes 1\/16 damage per turn for 4-5 turns."},{"id":"253","name":"Uproar","accuracy":"100","power":"90","pp":"10","type":"0","description":"Attacks for 2-5 turns. All Pokemon wake and none can fall asleep during the attack."},{"id":"258","name":"Hail","accuracy":"101","power":"0","pp":"10","type":"14","description":"Changes the weather to a hailstorm for five turns."},{"id":"259","name":"Torment","accuracy":"100","power":"0","pp":"15","type":"16","description":"Prevents the target from using the same move twice in a row."},{"id":"263","name":"Facade","accuracy":"100","power":"70","pp":"20","type":"0","description":"Doubles power if user is burned, paralyzed, or poisoned."},{"id":"269","name":"Taunt","accuracy":"100","power":"0","pp":"20","type":"16","description":"Target cannot use non-offensive moves for three turns."},{"id":"290","name":"Secret Power","accuracy":"100","power":"70","pp":"20","type":"0","description":"Has a 30% chance to paralyze the target."},{"id":"291","name":"Dive","accuracy":"100","power":"80","pp":"10","type":"10","description":"Dodges attacks on first turn, strikes on second."},{"id":"340","name":"Bounce","accuracy":"85","power":"85","pp":"5","type":"2","description":"Dodges attacks on first turn, strikes on second. Has a 30% chance to paralyze the target."},{"id":"349","name":"Dragon Dance","accuracy":"101","power":"0","pp":"20","type":"15","description":"Raises the users Attack and Speed by one stage."},{"id":"352","name":"Water Pulse","accuracy":"100","power":"60","pp":"20","type":"10","description":"Has a 20% chance to confuse the target."},{"id":"362","name":"Brine","accuracy":"100","power":"65","pp":"10","type":"10","description":"Has double power if target has less than half HP."},{"id":"363","name":"Natural Gift","accuracy":"100","power":"1","pp":"15","type":"0","description":"Power and type depend on the held berry."},{"id":"371","name":"Payback","accuracy":"100","power":"50","pp":"10","type":"16","description":"Power is doubled if the target has already moved this turn."},{"id":"399","name":"Dark Pulse","accuracy":"100","power":"80","pp":"15","type":"16","description":"Has a 20% chance to flinch."},{"id":"401","name":"Aqua Tail","accuracy":"90","power":"90","pp":"10","type":"10","description":"Inflicts regular damage with no additional effect."},{"id":"406","name":"Dragon Pulse","accuracy":"100","power":"85","pp":"10","type":"15","description":"Inflicts regular damage with no additional effect."},{"id":"416","name":"Giga Impact","accuracy":"90","power":"150","pp":"5","type":"0","description":"User cannot attack or switch the turn after using this attack."},{"id":"419","name":"Avalanche","accuracy":"100","power":"60","pp":"10","type":"14","description":"Has double power if the user has taken damage this turn."},{"id":"423","name":"Ice Fang","accuracy":"95","power":"65","pp":"15","type":"14","description":"Has a 10% chance to freeze the target and a 10% chance to make the target flinch."},{"id":"442","name":"Iron Head","accuracy":"100","power":"80","pp":"15","type":"8","description":"Has a 30% chance to flinch."},{"id":"444","name":"Stone Edge","accuracy":"80","power":"100","pp":"5","type":"5","description":"Has a high critical hit rate."},{"id":"445","name":"Captivate","accuracy":"100","power":"0","pp":"20","type":"0","description":"If target is opposite gender to user, lowers the targets Special Attack by two stages."},{"id":"496","name":"Round","accuracy":"100","power":"60","pp":"15","type":"0","description":"Has double power if a teammate used Round this turn. All allies using Round attack at once."},{"id":"503","name":"Scald","accuracy":"100","power":"80","pp":"15","type":"10","description":"Has a 30% chance to burn the target."},{"id":"510","name":"Incinerate","accuracy":"100","power":"60","pp":"15","type":"9","description":"Removes the targets Berry."},{"id":"523","name":"Bulldoze","accuracy":"100","power":"60","pp":"20","type":"4","description":"Lowers the targets Speed by one stage."},{"id":"525","name":"Dragon Tail","accuracy":"90","power":"60","pp":"10","type":"15","description":"Forces the target to switch."},{"id":"585","name":"Confide","accuracy":"101","power":"0","pp":"20","type":"0","description":"Lowers the targets Special Attack by one stage."}];

	var toQuery = function (args) {
		return Object.keys(args).map(function (a) {
			return a+'='+args[a];
		}).join('&');
	};
	var urls = {
		getItems: 		'/searchitems.php',
		getAbilities:	function(ruleset, species) { return '/searchabilities.php?' + (!species ? '' : 'species='+species) + '&ruleset='+ruleset; },
		getMoves:		function(ruleset, species) { return '/searchmoves.php?' + (!species ? '' : 'species='+species) + '&ruleset='+ruleset; },
		getPokemon:		function(ruleset, args) { return '/searchpokemon.php?' + (!args ? '' : toQuery(args)) + '&ruleset='+ruleset; }
	};


	var api = {
		getItems: function (ruleset, callback) {
			$.get(urls.getItems(ruleset), function (resp) {
				callback(resp);
			});
		},
		getAbilities: function (ruleset, species, callback) {
			$.get(urls.getAbilities(ruleset, species), function (resp) {
				callback(resp);
			});
		},
		getMoves: function (ruleset, species, callback) {
			// $.get(urls.getMoves(ruleset, species), function (resp) {
			// 	callback(resp);
			// });

			setTimeout(function () {
				callback(testMoves);
			}, 250);
		},
		getPokemon: function (ruleset, filters, callback) {
			// $.get(urls.getPokemon(ruleset, filters), function (resp) {
			// 	callback(resp);
			// });

			setTimeout(function () {
				callback(testPokemon);
			}, 250);
		},
	}

	return api;
});