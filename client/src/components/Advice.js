import React from 'react';

{/*

Based on grade and catergory, this will give advice on that to do, grade A use nuber 1, for B on throughout use two and increase the number of pointers based on grade, example B use 4, C use 8, D & F all.

*/}

function Advice(props) {

	var Advice = {
	  food: {
        1 : ["Great Job Your a Food Budget RockStar, However still look at this area, to see if there are any other potential savings"],
        2 : [
        		"Download coupons... Couponing doesn’t require circulars and scissors anymore. Visit Coupons.com, SmartSource.com or redplum.com,  couponmom.com , the savings racks up",
        		 "Reduce the amount of times you are eating out by a few times a week", 
        		 "Brown Bag some of your Lunches",
        		 "Brew and pack your own Coffee, $5 a day, turns into $100 in a month and $1200 a year",
        		 "Stick to your strict Shopping List", 
        		 "Don't Eat Out",
        		 "Don't buy brand names",
        		 "Bulk shop for on Deals and coupons",
        		 "Plan Your Meals around Sales",
        		 "Use everything in the Fridge",
        		 "Learn the price range of the items you buy most frequently so that you’ll be able to recognize when they hit their lowest and stock up then",
                 "Seriously Don't Eat Out",
                 "Shop by unit price. Many grocery stores list a cost per unit of each item, such as the price per ounce or pound. Use these stickers when comparison shopping for the same product, just in a different size.",
                 "Do your own slicing and dicing. Prepackaged and single-serving foods are easy mark-up territory"
                 "Brown Bag all of your Lunches, If buying lunch at work costs $5, but making lunch at home costs only $2.50, then in a year, you could afford to create a $500 emergency fund and still have money left over",
                 "Photograph your receipt. You can earn cash-back on your groceries with apps like Ibotta, SavingsStar and Checkout51",
                 "Use Frozen Mixed Vegetables Instead of Fresh Frozen vegetables are underrated.",
                 "Eat before you go. A study in the Journal of Consumer Research found that consumers are likely to spend more if their appetites have been stimulated beforehand.",
                 "Buy more fruits and vegetables. Research from the American Dietetic Association shows that when families add more produce to their diets, their waistlines get smaller and their food budgets can shrink by 25 percent.",
                 "Use a Goldilocks cart. Lindstrom told CNBC that doubling the size of a cart makes people buy 40% more.",
                 "Befriend the managers. The folks in charge of the produce, meat, dairy, and seafood departments can tell you what time of day food is marked down so you can score the best deals",
                 "Check yourself out. Impulse purchases dropped by 32% for women and about 17% for men when shoppers used the self-checkout line instead of a staffed checkout",
                 "Follow the produce cycle. You can save 30-50% on the price of produce by buying what's in season, Buy Oranges in the Winter and Skip Berries, etc..",
                 "Cut your meat and pack it",
                 "Shop the bottom shelf Grocery stores put the most expensive products on the upper shelves and endcaps – right at eye level."
            ]
     
      },
       clothing: {
	    1 : ["Great Job Your a Clothing Budget RockStar, However still look at this area, to see if there are any other potential savings"],
        2 : [
        		"Pay with cash only",
        		 "Time your purchases right. Buying off-season clothing will always cost you less", 
        		 "Buy second-hand",
        		 "Buy generic basics",
        		 "Skip the factory outlets Outlet stores are usually a mix of items from last season that didn’t sell (usually for a reason, like an unflattering color, poor fit, or a short-lived trend) and items that were made just for the outlet. With the latter, that price that’s 50% off the suggested retail price is pretty much made up — the outlet is the only place it’s ever been sold, and that “sale” price is the real price.", 
        		 "Use coupon apps to score a better deal",
        		 "Don't buy brand names",
        		 "Accept hand-me-downs",
        		 "Rent one-time outfits",
        		 "Don't buy dry clean only",
        		 "If you can’t afford it, you’ve got to skip it",
                 "Track the items you want. Easily scour the web for the lowest price on those shoes or that suit with InvisibleHand, a browser extension that automatically finds the cheapest rate on whatever item you’re looking at. You can also use price tracking tools like CamelCamelCamel or PriceZombie to see the highest and lowest prices an item is currently selling for, as well as its price history.",
                 "Be very wary of store credit cards. Retailers roll out all kinds of tempting offers to get you to open a credit card with them, but these retailer-branded credit cards have much higher APRs than standard credit cards—23.2% vs. 15%, according to creditcards.com"
                 "Avoid handling the merchandise. Research shows your willingness to pay more increases as you spend more time looking at and physically holding objects",
                 "Don’t do flash sales",
                 "Sell what you don’t wear",
                 "Take care of your clothes, Wash your clothes on the gentle cycle in cool water and even line-dry them – they’ll last the longest this way. For delicate items or clothes that might shrink, hand wash.",
                 "Buy uniforms at discount stores",
                 "Use the one in, one out rule: For every new piece of clothing (or pair of shoes, or accessory) you buy, you have to give one to charity. Yep, to get anything new, you have to give something up. ",
                 "Buy Clothes That Fit You Now",
                 "Fold, Don’t Hang, Knits",
                 "Skip the Dry Cleaner, most times there are two instructions"
            ]
       },
       utilities: {
       	    1 : ["Great Job Your a Utilities Budget RockStar, However still look at this area, to see if there are any other potential savings"],
            2 : [
           		"Turning down the heat in the winter and the air conditioner in the summer is one of the fastest ways to see a significant savings on your electricity bill",
           		 "Keeping lights and ceiling fans turned off when not in use is one of the best habits you can develop", 
           		 "Air-drying your clothes, dishes, and even your hair as often as possible can cut a big chunk out of your power bill each month",
           		 "Check for Leaks, Hidden water leaks can result in abnormally high water bills",
           		 "When purchasing new appliances or fixtures, be sure to opt for the most energy efficient styles available", 
           		 "Consider eliminating land line phone",
           		 "Shop around for Cell Phone Plans and Providers, you might need to go to a lower service and cheaper provider",
           		 "Do a nightly energy sweep, make sure everything is off or set to teh proper setting",
           		 "Set your water heater at 120 degrees, The Environmental Protection Agency estimates that a heater set at 140 degrees or higher can waste $36 to $61 annually in standby heat losses to keep water at that temperature, and more than $400 to bring fresh water up to that high temperature",
           		 "Use reusable AC and furnace filters, sing a permanent filter, you'll save money in the long run, cut your utility bill and prolong the life of your HVAC unit. If the disposable AC filters that must be changed every 3 months are around $4 each, you can recoup the $20 to $40 cost of a permanent filter in as little as 15 months.",
           		 "Cable, it's not a necessity, cutting it completely out is a huge savings",
           		 "Cable alternatives, Library (free), Online Network Channels (free), YouTube/Vimeo (free), Hulu ($8 per month), Netflix ($8 per month), Amazon Prime Video ($99 per year), Sling TV ($20 per month)"
                 "Do not rent your cable equiptment if you can, buy what you can, for instance you can buy a good router for $60 versus $10 dollars a month.",
                 "Do your meter and utility bill match up?, check you might find some issues",
                 "Buy Energy Star-certified products",
                 "Buy a programmable thermostat",
                 "Schedule technology-free days or hours each day. In addition to saving money, You will also be able to spend quality time with your family",
                 "Adjust Your Cooking Methods – In the summer we use a slow cooker to cook and we eat a lot of salads and fresh produce. In the winter, we bake a lot and let the oven heat keep the kitchen warm",
                 "Turn Off the Ceiling Fan and Lights when You Leave the House",
                 "Wash Clothes in Large Loads"
                  
               ]
       },
       housing: {
      	    1 : ["Great Job Your a Housing Budget RockStar, However still look at this area, to see if there are any other potential savings"],
           	2 : [
          		"If you are truly struggling in this area, then you need to move and find a cheaper area, it's hard to hear but if this is a real struggle find a cheaper place to live any people leave out this option when looking at trimming their budget, but if you can find work in another area, it may be worth considering. Look around at other areas of the country where you can find employment, see what your salary would be there. Then look at the housing costs and see how they stack up. Quite often, you’ll find yourself significantly ahead by looking at rural or suburban areas vs. city options.",
          		 "Saving all other areas will help you in this area", 
          		 "Get another source of income, work another job again if it's that important to live where you are",
          		 "The percetages are suggestions but most suggest that your hosuing should be no more the 1/4 of your pay and about 35% on the super high end, if you are at 39% but comfortable financially then you are ok. Again all sugesstions to improve your financial health",
          		 "Keep up on local tax breaks and laws, there might be some breaks there",
          		 "Learn Basic Repairs, youtube is a great resource, just leave the heavy plumbing and eletrical to a professional"
          		]
       },
       savings: {
      	    1 : ["Great Job Your a Savings Budget RockStar, However still look at this area, to see if there are any other potential savings"],
           	2 : [
          		"The most important step in any program and one could never skip. Build an emergency fund. It can make all the difference. Low-income families with at least $500 in an emergency fund are better off financially than moderate-income families with less saved up, You don’t know what’s going to happen in life. Money magazine states that 78% of us will have a major negative financial event in any given 10-year period",
          		 "Create a budget, and you’ll see how much money you waste every month. You’ll get to the $500 in no time", 
          		 "Don't just save money, save. There’s a difference between saving money and saving money for your future. So don’t just spend less, put the money you save into a savings account to plan for college expenses, retirement, or emergencies that can leave you financially better off",
          		 "Save automatically. Setting up automatic savings is the easiest and most effective way to save, and it puts extra cash out of sight and out of mind. Every pay period, have your employer deduct a certain amount from your paycheck and transfer it to a retirement or savings account",
          		 "After your emergency fund of $500-$1000 is set then pay off your debt first before saving for retirement, college etc.. The interest you pay in debt and the negative consequences for out wiegh any other savings. Earning 5-8%(not guarunteed) on a mutal fund does not make up for the 12-24% interest rate on a credit card or any other loan.",
          		 "Remember throw everything at your debt first",
          		 "Calculate purchases by hours worked instead of cost. Take the amount of the item you're considering purchasing and divide it by your hourly wage. If it’s a $50 pair of shoes and you make $10 an hour, ask yourself if those shoes are really worth five long hours of work.",
          		 "Stop collecting, and start selling",
          		 "Garage sale, eBay or Craigslist!, sell whatever you don't need to build up your fund",
          		 "Once your emergency fund and debt is payoff now worry on college and retirement",
          		 "Try to go to 15% on your retirement fund",
          		 "Shop around for Collge saving funds, look for low cost and high return plans, or create your own 529 plan"
          		 "Do your reseach!!"

          		]
       },
       medical: {
       1 : ["Great Job Your a Medical Budget RockStar, However still look at this area, to see if there are any other potential savings"],
       2 : [
       		"Whatever you do, remember that it is very important to have health insurance of some kind",
      		"Use in-network care providers",
      		"Always ask for a discount",
      		"Ask if paying for the appointment or prescription out-of-pocket is cheaper than using insurance",
      		 "Research service costs online", 
      		 "Ask for the cost of the procedure/service",
      		 "Budget for known medical expenses, create a fund you can always access and have ready",
      		 "Always ask about medical options",
      		 "Choose Generic Medicine can get expensive, especially those treating a chronic illness or for patients that take multiple prescriptions.",
      		 "  Review Your Prescriptions With a Pharmacist",
      		 "Fight Claims, Nobody wants to get a hefty bill in the mail for a medical procedure they thought was covered, but it happens all the time. Calling the insurance company to sort out the bill often leads to reduce claims",
      		 "Ask for a discount before securing services. It is possible to negotiate a lower price for healthcare services, particularly if you are seeking a procedure or treatment offered by numerous other providers in your area",
      		 "Seek out a local healthcare advocate/professional bill reviewer. Professional healthcare advocates can provide you with information about local care options, help you obtain care and resolve billing issues with your insurance company and/or healthcare providers",
      		 "Watch For Billing Errors",
      		 "Don’t allow your policy to lapse, but if it does get it corrected quickly so you don’t miss out on coverage",
      		 "Claim your medical expenses",
      		 "Take advantage of free services. Insurers save money when you stay healthy, and many now provide free preventive care, such as annual mammograms and Pap tests for women in certain age groups, plus regular screenings for colorectal and prostate cancer",
      		 "Review your insurance coverage benefits manual. Your health insurance policy manual outlines which charges are 'covered' versus 'not covered'. All covered expenses should be paid for by the health insurance company. The EOB form you receive from your insurance company will note if a service was covered or not",
      		 "Create a payment plan. If you can't pay your bill in full and on time, ask the billing-office staff if they will work with you to create a plan enabling you to make smaller, more manageable payments over an extended period of time",
      		 "Don’t Pay by Credit Card Forgo the credit card if you think you might be asking for a discount later. Using plastic puts you in a weaker bargaining position with the hospital",
      		 "Establish a health savings account. If you have a high-deductible health plan, you should consider opening a health savings account to save for items your health plan won't cover."
      		]
   },
       insurance: {
       1 : ["Great Job Your a Insurance Budget RockStar, However still look at this area, to see if there are any other potential savings"],
       2 : [
       	   "Whatever you do, remember that it is very important to have Auto/Home/Life/Health insurance of some kind",
      	   "Establish a health savings account. If you have a high-deductible health plan, you should consider opening a health savings account to save for items your health plan won't cover.",
      	   "Shop around for Auto and Home Insurance, check if bundle prices are better!!",
      	   "Try to pay Yearly on Home and Auto versus by month, check for this discount",
      	   "Go for a term policy versus whole life",
      	   "Seek Additional Discounts: Ask your insurance company representative about any other discounts that may be available to you", 
      	   "If you have a good amount in savings and you have a emergency fund of 3-6 months, Raise your deductible, your monthly cost will be lower",
      	   "Don’t confuse what you paid for your house with rebuilding costs. The land under your house isn't at risk from theft, windstorm, fire and the other perils covered in your homeowners policy. So don't include its value in deciding how much homeowners insurance to buy",
      	   "Review the limits in your policy and the value of your possessions at least once a year",
      	   "Look for private insurance if you are in a government plan", 
      	   "Look at healthcare savings account to help cover your deductable",
      	   "Shopping the insurance market for auto and home coverage periodically can save you big bucks"
      		]
       },
       transportation: {
       1 : ["Great Job Your a Transportation Budget RockStar, However still look at this area, to see if there are any other potential savings"],
       2 : [
       	   "Remove excess weight from your vehicle,” said Karen Hoxmeier, owner of MyBargainBuddy.com. “An excess 100 pounds in the trunk can reduce your fuel economy by 1 to 2 percen",
      	   "Getting a tune-up can improve gas mileage by up to 4 percent, according to Hoxmeier. Inflating your tires to the proper pressure can boost gas mileage by more than 3.3 percent, according to FuelEconomy.gov, and using the manufacturer’s recommended grade of motor oil can maximize mileage by 1 to 2 percent",
      	   "Buy discounted gas gift cards",
      	   "Calm your driving habits",
      	   "Roll your windows down versus turning on the air, it helps with gas",
      	   "Buy monthly or weekly passes for the Bus/Train versus single"
      	   "Avoid toll roads, if you can", 
      	   "Download gas-saving apps",
      	   "Look for local transportation incentives, some cities and states offer it",
      	   "Buy a bicycle",
      	   "Consider getting rid of your second — or third — car", 
      	   "Carpool with co-workers"
      		]
       },
       personal: {
       1 : ["Great Job Your a Personal Budget RockStar, However still look at this area, to see if there are any other potential savings"],
       2 : [
       	   "Cancel newspaper and magazine subscriptions", 
       	   "Cancel club memberships",
       	   "Reduce or eliminate consumable habits (such as smoking, alcohol, etc..",
       	   "Reduce or eliminate organized child activities The high cost of children’s sports can spiral out of control if you don’t keep it in check. To minimize these costs, look at the real expenses involved with any sport or activity before you let your children sign up. Meanwhile, keeping kids in only one activity at a time can also help you save as much as possible",
       	   "Create a family spending limit on gifts"
      		]
       },
       entertainment: {
       1 : ["Great Job Your a Entertainment Budget RockStar, However still look at this area, to see if there are any other potential savings"],
       2 : [
       	   "Don't do it unless your completely out of debt and have 3-6 moths worth of emergency savings", 
       	   " Swap books, music, and DVDs on the Internet or at the library",
       	   "Suggest cheap activities when meeting up with family and friends",
       	   "Look for free local things to do in your town",
       	   "Create a family spending limit on gifts",
       	   "Travel off-season",
       	   "Travel with a group or check out a tour",
       	   "Go out to lunch, instead of dinner"
      		]
       },
       debt: {
       1 : ["If your at zero, you win!! Welcome to the rest of your life, However still look at this area, to see if there are any other potential savings"],
       2 : [
       	   "Stop using Credit immediately, cut all those cards up if you have to, send them away, freeze them in the freezer", 
       	   "WARNING: Getting out of debt isn’t easy. Hell, this might be one of the hardest things you ever do",
       	   "Do this budget every month, follow the advice we have layed out",
       	   "Do a first-pass at your budget, make sure you that you can commit",
       	   "Attack your debt, we mean attack it, throw everything at, get an extra job to do it, whatever it takes",
       	   "Lowest balance to highest, so you are eliminating a bill everytime you pay something off, once that bill is eliminated, take that amount you were using from the bill you paid off an now throw all that money into the new lowest balance bill and keep doing it until you have zero debt",
       	   "dont try to focus on every bill at once, pay the absolute minimum on all except the ones you are focusing on"
       	   "Throw any excess cash at your debt, anything extra goes into paying off this debt",
       	   "Pick up a side hustle",
       	   "Ask for lower interest rates on your credit cards — and negotiate other bills",
       	   "Avoid balance transfers becuase you still have to pay a might need to pay a balance transfer fee of around 3% for the privilege, what happens if you dont pay it down in the 12-15 months of the zero/lower interest, you now just added an addtiondal 3% on top of what you owned, pay it off instead"
       	   "Ask for lower interest rates on your credit cards — and negotiate other bills",
       	   "Your car is a debt get that paid off too, having a car payment is not a way of life, once you pay off your car it becomes an asset versus a debt",
       	   "Never lease a car, it is too easy to get into another lease, go over in miles, or roll over negative equity, meaning you roll over extra costs from a privious deal, better pay off your car and not have a payment until you have to get another care. ",
       	   "Buy a car you can afford, remember this is not forever but until you can",
       	   "Don't buy a new car, get a 2 to 3 year car coming off a lease for the best value or better yet buy from a person not a dealer, use a service like trucar.com and always compare values on Kelly's Blue Book",
       	   "Avoid debt consoladation, just pay off your debt with a solid plan",
       	   "On Student loans try to pay the small loans first, as mentioned before, smallest to largest",
       	   "Save up for Education in a fund and go when you can afford it",
       	   "Adapt to your new lifestyle, this is one of the hardest things you will ever do"
      		]
       },
	}

}

{/*

General Savings Tips
Build an emergency fund. It can make all the difference. Low-income families with at least $500 in an emergency fund are better off financially than moderate-income families with less saved up. Learn more about emergency funds here.

Establish your budget. Are you looking for an easy way to begin? On the first day of a new month, get a receipt for everything you purchase. Stack the receipts into categories like restaurants, groceries, and personal care. At the end of the month you will be able to clearly see where your money is going.

Budget with cash and envelopes. If you have trouble with overspending, try the envelope budget system where you use a set amount of cash for most spending. And once the cash is gone, it's gone. Learn more about the envelope budget system here.

Don't just save money, save. There’s a difference between saving money and saving money for your future. So don’t just spend less, put the money you save into a savings account to plan for college expenses, retirement, or emergencies that can leave you financially better off. Learn more about what you should be saving for here.

Save automatically. Setting up automatic savings is the easiest and most effective way to save, and it puts extra cash out of sight and out of mind. Every pay period, have your employer deduct a certain amount from your paycheck and transfer it to a retirement or savings account. Ask your HR representative for more details about how to set this up. Or every month, have your bank or credit union transfer a fixed amount from your checking account to a savings or investment account. Learn more about automatic savings here.

Aim for short-term savings goals. Make a goal such as setting aside $20 a week or month, rather than a longer term savings goal. People save more successfully when they keep short-term goals in sight.

Start saving for your retirement as early as possible. Few people get rich through their wages alone. It's the miracle of compound interest, or earning interest on your interest over many years, that builds wealth. Because time is on their side, the youngest workers are in the best position to save for retirement. Learn more about different options for saving for retirement in your workplace or on your own here.

Take full advantage of employer matches to your retirement plan. Often as an incentive, employers will match a certain amount of what you save in a retirement plan such as a 401(k). If you don't take full advantage of this match, you're leaving money on the table. 

Save your windfalls and tax refunds. Every time you receive a windfall, such a work bonus, inheritance, contest winnings, or tax refund, put a portion into your savings account. 

Make a savings plan. Those with a savings plan are twice as likely to save successfully. That's where America Saves comes in. If you take the America Saves Pledge, we'll help you set a goal and make a plan. And it doesn’t stop there. America Saves will keep you motivated with information, advice, tips, and reminders to help you reach your savings goal. Think of us as your own personal support system. Take the America Saves Pledge here.

Save your loose change. Really! Putting aside just 50¢ over a year will get you 40 percent of the way to a $500 emergency fund. And some banks and credit unions or apps offer programs that round all your purchases to the nearest dollar and put that money into a separate savings account. 

Use the 24 hour rule. This rules helps avoid purchasing expensive or unnecessary items on impulse. Think over each nonessential purchase for at least 24 hours. This is particularly easy to do while shopping online, because you can add items to your cart or wish list and come back to them a day later. 

Treat yourself, but use it as an opportunity to save. Match the cost of your nonessential indulgences in savings. So, for example, if you splurge on a smoothie while out running errands, put the same amount into your savings account. And think of it this way, if you can't afford to save the matching amount, you can't afford the treat either. 

Calculate purchases by hours worked instead of cost. Take the amount of the item you're considering purchasing and divide it by your hourly wage. If it’s a $50 pair of shoes and you make $10 an hour, ask yourself if those shoes are really worth five long hours of work. 

Unsubscribe. Avoid temptation by unsubscribing from marketing emails to the stores you spend the most money at. By law, each email is required to have an unsubscribe link, usually at the bottom of the email. 

Place a savings reminder on your card. Remind yourself to think through every purchase by covering your card with a savings message, such as "Do I really need this?" Write the message on a piece of masking tape or colorful washi tape on your card. 

Participate in a local Investment Development Account (or IDA) program. If your income is low, you may be eligible to participate in an IDA program where your savings are matched. In return for attending financial education sessions and planning to save for a home, education, or business, you typically receive at least $1 for every $1 you save, and sometimes much more. That means $25 saved each month could become several hundred dollars by the end of the year. Find an IDA program near you.



Banking, Credit, and Debt Savings Tips 
Pay off credit cards in full each month. The miles and cash-back are only valuable if you're not falling into debt or paying interest. Learn more about debt and credit here. 

Start with a goal of reducing your credit card debt by just $1,000. That $1,000 debt reduction will probably save you $150-200 a year in interest, and much more if you're paying penalty rates of 20-30 percent.

Use only the ATMs of your bank or credit union. Using the ATM of another financial institution once a week might seem like no big deal, but if it's costing you $3 for each withdrawal, that's more than $150 over the course of a year.

Check your credit report for free once a year. Use your annual free credit report from the three credit reporting bureaus to look for inaccuracies or opportunities to raise your score. Credit scores are used by loan providers, landlords, and others to determine what they’ll sell you, and at what price. For example, a low credit score can increase the cost of a 60-month, $20,000 auto loan by more than $5,000. Learn more about your credit score here.

Pay all of your bills on auto-pay. This ensures they are paid on time, in full to avoid late charges. As a bonus, some loan providers offer a small interest rate deduction if you enroll in auto-pay. 

Get free debt counseling. The most widely available help managing your debt is with a Consumer Credit Counseling Services (CCCS) counselor. CCCS’ network of non-profit counselors can work with you confidentially and judgement-free to help you develop a budget, figure out your options, and negotiate with creditors to repay your debts. Best of all, the 45-90 minute counseling sessions are free of charge and come with no obligations. Get started here. 

Freeze your credit, literally. If you are having trouble controlling your credit card use, but don't want to cut up your credit card in case you need it at some point, freeze your credit card in a bag of water. Needing to thaw your card will force you to really consider the purchase before you make it. 


Entertainment Savings Tips
Take advantage of your library. More and more libraries are offering e-books, so you don't even need to visit in person. Many libraries are also part of an intra-library loan system where you can borrow anything you want, but that they don't have, for a minimal shipping charge. Just ask. And some libraries allow you to borrow things like tools and sewing machines. 

Get unadvertised theater ticket discounts. Call, email, or tweet your nearby theater to ask about discount options that are often not well-advertised. Many theaters offer discounted seats for seniors, students, and young adults, such as pay-your-age or pay-what-you-can programs. Or they'll offer rush discounts of any unsold seats immediately before a show. 

Volunteer at local festivals. Cultural festivals and events often offer free admission to event volunteers. Contact the organizers of your favorite event to ask about volunteer opportunities and benefits. 


Family and Friends Savings Tips
Create a family spending limit on gifts. Discuss placing spending limits on gifts within your family and/or a system where you only purchase one gift for one person over the holidays. These limits tend to reduce expenditures and be greatly appreciated by family members with less financial flexibility. 

Plan gift-giving well in advance. That will give you time to decide on the most thoughtful gifts, which usually are not the most expensive ones. And if these gifts are products that must be purchased, you will have the opportunity to look for sales.

Start saving for college at the baby shower. It's never too soon to start a college savings account for junior. Ask for contributions to a college fund instead of clothing and toy gifts for your new baby. 

Don't buy cheap clothes for cheap's sake. It sometimes make sense to prioritize quality over price when purchasing clothes for the family. An inexpensive shirt or coat is a poor bargain for older family members if it wears out in less than a year, but could make sense for quickly growing children. Consider fabric, stitching, washability, and other quality related factors in your selection of clothes.

Organize a neighborhood swap meet. Here’s how it works: gather your friends and neighbors with kids around the same age and everyone brings gently used clothing, books, and school supplies, toys, etc., and receives a ticket for each item they bring. Each ticket entitles you to one item from the swap meet. If you contribute six books, you can leave with up to six new-to-you books. If you contribute seven items of clothing, you can leave with up to seven new-to-you items of clothing.  All leftover items are donated.

Designate one day a week a "no spend day." Reserve one night a week for free family fun. Cook at home, and plan out free activities such as game night, watching a movie, or going to the park. 



Food Savings Tips
Brown bag your lunch. The reason you hear this tip so much is that it works! If buying lunch at work costs $5, but making lunch at home costs only $2.50, then in a year, you could afford to create a $500 emergency fund and still have money left over.

Commit to eating out one fewer time each month. Save money without sacrificing your lifestyle by taking small steps to reduce your dining budget. Start off with reducing the amount you eat out by just once per month. 

Plan your meals in advance and stick to a list while grocery shopping. People who do food shopping with a list, and buy little else, spend much less money than those who decide what to buy when they get to the food market. The annual savings could easily be hundreds of dollars.

Shop by unit price. Many grocery stores list a cost per unit of each item, such as the price per ounce or pound. Use these stickers when comparison shopping for the same product, just in a different size. 

Stick to water. It’s standard in the restaurant industry to mark up the cost of alcohol by three to five times. So an easy way to cut down on your restaurant spending without changing your habits too drastically is to skip the beverages, alcoholic and non-alcoholic.

Save time and money by doubling the recipe. Next time you make a family favorite, double the recipe and freeze the leftovers for another day. That way you can get two meals out of one and use the ingredients more efficiently with less waste. Aluminum pans of various sizes can be purchased on the cheap, especially when buying bulk, and make freezing and reheating a snap.



Health Savings Tips
Don't skimp on preventive healthcare. Routine dental checkups, for example, help prevent fillings, root canals, and dental crowns, which are expensive and no fun.

Go generic. Ask your physician if generic prescription drugs are a good option for you. Generic drugs can cost several hundred dollars less to purchase annually than brand-name drugs. And since physicians often don't know the costs you incur for a particular drug, you often have to ask. 

Comparison shop for prescription drugs. Don't just rely on the closest drugstore because the cost to you can vary significantly from pharmacy to pharmacy. Make sure to check out your local pharmacist, supermarkets, wholesale clubs, and mail-order pharmacies. 

Purchase store brand over-the-counter medications. Store brand medications often cost 20-40 percent less than nationally advertised brands, but are the exact same formula. The premium you're paying on brand names is for nothing but the marketing. 



Home Savings Tips
Comparison shop for homeowners insurance. Before renewing your existing homeowners insurance policy each year, check out the rates of competing companies. 

Refinance your mortgage. Explore if you have the option to refinance your mortgage to a lower interest rate. On a 15-year $100,000 fixed-rate mortgage, lowering the rate from 7 percent to 6.5 percent can save you more than $5,000 in interest charges over the life of the loan. And, you will accumulate home equity more rapidly, thus increasing your ability to cover large emergency expenditures.

Audit your home energy use. Ask your local electric or gas utility for a free or low-cost home energy audit. The audit may reveal inexpensive ways to reduce home heating and cooling costs by hundreds of dollars a year. Keep in mind that a payback period of less than three years, or even five years, usually will save you lots of money in the long-term.

Weatherproof your home. Caulk holes and cracks that let warm air escape in the winter and cold air escape in the summer. Your local hardware store has materials, and quite possibly useful advice, about inexpensively stopping unwanted heat or cooling loss.

Keep the sun out. Keep your blinds or curtains closed during hot summer days. Blocking the sunlight really does help to keep your house cooler. 

Use less water. Install low-flow showerheads and faucet aerators to reduce your water usage and water costs. 

Cut laundry detergent and dryer sheet use in half. The laundry detergent sold today is usually highly concentrated and powerful. Use the smallest suggested amount, and often you can use less than what's on the bottle and still get clean clothes. In many cases, using less actually washes more effectively because there’s no leftover soap in your clothes. And tearing your dryer sheets in half gives the same result for half the price. 

Lower the temperature on your water heater to 120 degrees. For every 10 degree reduction in temperature, you can save up to 5 percent on water heating costs. 



Transportation Savings Tips
Comparison shop for auto insurance. Before renewing your existing auto insurance policy each year, check out the rates of competing companies. 

Invest in car maintenance. Keeping your car engine tuned and its tires inflated to their proper pressure saves money in the long run. Doing both can save you up to $100 a year in gas.

Check multiple sites for low airfares. Don't rely on a single airline search engine to show you all inexpensive fares. Some discount carriers do not allow their flights to be listed in these third-party searches, so you need to check their websites separately. 

January
What to buy:
TVs and electronics, bedding, linens, cookware, fitness equipment

February
What to buy:
Winter apparel and accessories, appliances, furniture, housewares

March
What to buy:
Non-Apple smartphones, running shoes, team apparel

April
What to buy:
Home, garden, and auto supplies; spring clothing

May
What to buy:
Home furnishings, home goods

June
What to buy:
Tools and home improvement materials

July
What to buy:
Swimwear, summer entertaining goods, air conditioners

August
What to buy:
Laptops, summer clothing

September
What to buy:
Home furnishings, outdoor and patio goods, last-generation iPhones/iPads

October
What to buy:
Denim and fall fashion, camping gear, sports equipment

November
What to buy:
Videogames, consumer electronics

December
What to buy:
Gift cards, toys


*/}

export default Advice;