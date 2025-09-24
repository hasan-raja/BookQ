//Quotes data
const quotes = [
    {
        id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        text: "It is our choices that show what we truly are, far more than our abilities.",
        author: "J.K. Rowling",
        book: "Harry Potter and the Chamber of Secrets"
    },
    {
        id: "b2c3d4e5-f6g7-8901-bcde-f23456789012",
        text: "All animals are equal, but some animals are more equal than others.",
        author: "George Orwell",
        book: "Animal Farm"
    },
    {
        id: "c3d4e5f6-g7h8-9012-cdef-345678901234",
        text: "Not all those who wander are lost.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
    },
    {
        id: "96564312-401d-45dd-adea-c231c241c75b",
        text: "The only way out of the labyrinth of suffering is to forgive.",
        author: "John Green",
        book: "Looking for Alaska"
    },
    {
        id: "186664d8-f588-4e09-9706-9815984a1522",
        text: "So we beat on, boats against the current, borne back ceaselessly into the past.",
        author: "F. Scott Fitzgerald",
        book: "The Great Gatsby"
    },
    {
        id: "a3b8de63-3c63-4eeb-98e3-356deef1feac",
        text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        author: "Jane Austen",
        book: "Pride and Prejudice"
    },
    {
        id: "679100f0-3297-4aff-9e1c-742203b6f0c4",
        text: "Call me Ishmael.",
        author: "Herman Melville",
        book: "Moby-Dick"
    },
    {
        id: "ad613b54-c13c-45e8-af1f-2010424c21c5",
        text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
        author: "John",
        book: "The Bible"
    },
    {
        id: "90bbbe21-0e6f-4793-bcf4-c9064e65ec92",
        text: "It was the best of times, it was the worst of times.",
        author: "Charles Dickens",
        book: "A Tale of Two Cities"
    },
    {
        id: "0a17ff71-d187-40bd-8a1b-e5003f35ace5",
        text: "I am not afraid of storms, for I am learning how to sail my ship.",
        author: "Louisa May Alcott",
        book: "Little Women"
    },
    {
        id: "e2a9b088-77df-4740-a86d-ffcc54eef1a1",
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        book: "The Walt Disney Story"
    },
    {
        id: "ed1497f2-df25-4aa5-8cf2-6f65ae4200cb",
        text: "Life is what happens to you while you're busy making other plans.",
        author: "John Lennon",
        book: "Beautiful Boy"
    },
    {
        id: "8029b711-27b1-4d10-8e3f-4094c08362e9",
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        book: "This Is My Story"
    },
    {
        id: "8218a8fc-498d-4385-a153-c5f6847f5626",
        text: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington",
        book: "Up from Slavery"
    },
    {
        id: "de26a1d8-ea6f-4903-8da9-88d9feaaa83b",
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison",
        book: "The Diary and Sundry Observations"
    },
    {
        id: "333b411d-c3da-4bee-b4e5-18361de7c7d3",
        text: "If you really look closely, most overnight successes took a long time.",
        author: "Steve Jobs",
        book: "Steve Jobs"
    },
    {
        id: "fbffa9f5-82d4-4634-ae27-ffa033f16e13",
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
        book: "Awaken the Giant Within"
    },
    {
        id: "2e7647ef-02ca-41c4-9829-f9737bb98a14",
        text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennett",
        book: "The Light in the Heart"
    },
    {
        id: "3dbf4cac-67b7-45d6-8884-4864b5675cb3",
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        book: "Never Give In!"
    },
    {
        id: "ed225229-4bb7-46d6-b9fb-98375c6c1c7c",
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        book: "The Walt Disney Story"
    },
    {
        id: "fcd2dfd9-009c-4e41-a5b3-a4817ba33ab7",
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers",
        book: "The Autobiography of Will Rogers"
    },
    {
        id: "b15fa03f-7554-48af-bb34-efb7cf604dfc",
        text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
        author: "Unknown",
        book: "Life Lessons"
    },
    {
        id: "3ac9bc79-f3c8-4803-91fb-e1ae3a08e3b9",
        text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
        author: "Steve Jobs",
        book: "Steve Jobs"
    },
    {
        id: "27aa5331-9ed5-4775-a99c-d1427b199591",
        text: "People who are crazy enough to think they can change the world, are the ones who do.",
        author: "Rob Siltanen",
        book: "Think Different"
    },
    {
        id: "4af22ee7-fedb-4af1-bea1-84a0e99ef7d9",
        text: "Failure will never overtake me if my determination to succeed is strong enough.",
        author: "Og Mandino",
        book: "The Greatest Salesman in the World"
    },
    {
        id: "7db87aad-7a2e-4d42-80b9-fa2f0c5de56c",
        text: "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That's the classic entrepreneur.",
        author: "Mohnish Pabrai",
        book: "The Dhandho Investor"
    },
    {
        id: "a9950013-a91b-4332-9d8b-9135ab248346",
        text: "We may encounter many defeats but we must not be defeated.",
        author: "Maya Angelou",
        book: "I Know Why the Caged Bird Sings"
    },
    {
        id: "610ddda4-f112-4657-af33-4c382fe69650",
        text: "Knowing yourself is the beginning of all wisdom.",
        author: "Aristotle",
        book: "Nicomachean Ethics"
    },
    {
        id: "3db7a083-ccc7-4187-ba30-961709960635",
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson",
        book: "Self-Reliance"
    },
    {
        id: "7ba42a98-f04a-4b29-8692-019fa48f0ab4",
        text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau",
        book: "Walden"
    },
    {
        id: "98083d0f-58d2-4aa5-8c89-4bf86614af9b",
        text: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett",
        book: "One More Time"
    },
    {
        id: "58a40931-3f6a-4e85-9992-c3e0b9feb248",
        text: "Nothing is impossible, the word itself says 'I'm possible'!",
        author: "Audrey Hepburn",
        book: "Audrey Hepburn"
    },
    {
        id: "c4f3dc42-e0ef-42b1-a01c-376aec0ddb4b",
        text: "There is nothing impossible to they who will try.",
        author: "Alexander the Great",
        book: "The Campaigns of Alexander"
    },
    {
        id: "ce195716-e600-4700-ac98-8019df485dac",
        text: "The bad news is time flies. The good news is you're the pilot.",
        author: "Michael Altshuler",
        book: "The Complete Idiot's Guide to Changing Your Life"
    },
    {
        id: "420470b7-b402-4fc1-a1f5-16fbb0a31033",
        text: "Life has got all those twists and turns. You've got to hold on tight and off you go.",
        author: "Nicole Kidman",
        book: "Nicole Kidman"
    },
    {
        id: "f79a5eaa-34f7-4ea5-8c9f-ff8abcbb1739",
        text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
        author: "Walt Whitman",
        book: "Leaves of Grass"
    },
    {
        id: "84f309e8-42f3-407f-b579-456f79eca41d",
        text: "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
        author: "Amal Clooney",
        book: "Amal Clooney"
    },
    {
        id: "7b78e8e8-f3c2-4ea3-8cf5-e739ecc24adc",
        text: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it.",
        author: "Chimamanda Ngozi Adichie",
        book: "Americanah"
    },
    {
        id: "81a24f1a-c590-4773-a638-433d4c69b642",
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
        book: "The Chronicles of Narnia"
    },
    {
        id: "8d18d9a9-7abd-4c97-8148-4b9e86da5501",
        text: "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.",
        author: "Dr. Phil",
        book: "Life Strategies"
    },
    {
        id: "4a025225-79c8-4705-9697-3692d5d15f88",
        text: "For me, becoming isn't about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self.",
        author: "Michelle Obama",
        book: "Becoming"
    },
    {
        id: "c88fcc2d-2577-4661-ae1b-4e84bb9997f3",
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa",
        book: "A Simple Path"
    },
    {
        id: "8b0b3bea-2c33-4c69-805a-9e5bb0a2efac",
        text: "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
        author: "Lady Gaga",
        book: "Born This Way"
    },
    {
        id: "ceeaca2a-3735-4a41-a037-54ba3baf5e58",
        text: "If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is.",
        author: "Gabrielle Bernstein",
        book: "The Universe Has Your Back"
    },
    {
        id: "be71cbcc-f239-4f0d-bef5-bd8411ab4698",
        text: "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
        author: "Mandy Hale",
        book: "The Single Woman"
    },
    {
        id: "bb0d7640-d90d-4d82-8b07-3901f098947f",
        text: "You can be everything. You can be the infinite amount of things that people are.",
        author: "Kesha",
        book: "Rainbow"
    },
    {
        id: "d45b3050-c3eb-4b63-8552-129e1cb6091e",
        text: "Nothing in the world is more common than unsuccessful people with talent.",
        author: "Unknown",
        book: "Life Lessons"
    },
    {
        id: "da0747d2-6431-4cae-8ff9-3a82faa8fcab",
        text: "Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.",
        author: "Kofi Annan",
        book: "Interventions"
    },
    {
        id: "5fafd095-5c19-4597-9ea9-740a941e168e",
        text: "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
        author: "Roald Dahl",
        book: "The Twits"
    },
    {
        id: "75cb2ff1-e103-483b-bac5-966cc5dc04c3",
        text: "The mind is everything. What you think you become.",
        author: "Buddha",
        book: "The Dhammapada"
    },
    {
        id: "5e496637-fca9-4a11-82b5-a50f986a9af0",
        text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
        author: "Amelia Earhart",
        book: "Last Flight"
    },
    {
        id: "1e06f44d-7733-4b53-becf-749b77decbd2",
        text: "You're braver than you believe, and stronger than you seem, and smarter than you think.",
        author: "A.A. Milne",
        book: "Winnie-the-Pooh"
    },
    {
        id: "d9feae94-a6ae-4a60-a555-5f1cc0b770a0",
        text: "Keep your eyes on the stars, and your feet on the ground.",
        author: "Theodore Roosevelt",
        book: "The Strenuous Life"
    },
    {
        id: "69c076ab-14e1-4664-90d0-dcdbf27b77ac",
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        book: "This Is My Story"
    },
    {
        id: "221e3934-c5b5-49b0-ab28-b73aa88b2b79",
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
        book: "The Chronicles of Narnia"
    },
    {
        id: "0e20bf9a-a852-4f7b-b5d1-f7b832281d7f",
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle",
        book: "Nicomachean Ethics"
    },
    {
        id: "1eb2370f-c23c-4cb6-838b-523524753324",
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        book: "Steve Jobs"
    },
    {
        id: "dc508945-7984-44d4-b5ef-9422469721fd",
        text: "If you can dream it, you can do it.",
        author: "Walt Disney",
        book: "The Walt Disney Story"
    },
    {
        id: "c40f56d0-ad0c-4864-8e41-2e5bc6d49a40",
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        book: "The Walt Disney Story"
    },
    {
        id: "ec7e932a-eef4-43fc-8ac0-38f719d65aab",
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
        book: "Random Reminiscences of Men and Events"
    },
    {
        id: "a8c89b86-02b8-43dc-a885-5929b4024183",
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
        book: "Steve Jobs"
    },
    {
        id: "c5cb29ed-2d5d-4475-a01a-7baada02179e",
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        book: "The Walt Disney Story"
    },
    {
        id: "edd40594-34d2-44ba-982a-2b556dcb8b62",
        text: "Life is what happens to you while you're busy making other plans.",
        author: "John Lennon",
        book: "Beautiful Boy"
    },
    {
        id: "0214d0c8-3925-47c6-abe3-3d7746d1e03e",
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        book: "This Is My Story"
    },
    {
        id: "2c92bb50-37c2-45c0-bab9-f21d9c7c96c1",
        text: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington",
        book: "Up from Slavery"
    },
    {
        id: "31fde677-9120-4b13-8e94-7d22e799a19d",
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison",
        book: "The Diary and Sundry Observations"
    },
    {
        id: "d647b94f-4ecd-4332-b5f4-5a2f9e455e51",
        text: "If you really look closely, most overnight successes took a long time.",
        author: "Steve Jobs",
        book: "Steve Jobs"
    },
    {
        id: "b863c610-3eef-4f7c-a954-cb8688e869d2",
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
        book: "Awaken the Giant Within"
    },
    {
        id: "f243e655-0e0a-4701-a5c5-ae889ac4b29f",
        text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennett",
        book: "The Light in the Heart"
    },
    {
        id: "acceaec5-1f91-4b1b-bf4f-dd560648ca9b",
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        book: "Never Give In!"
    },
    {
        id: "e8f7db7b-5a18-49b7-8742-387bac4017b4",
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        book: "The Walt Disney Story"
    },
    {
        id: "df6c5273-4420-45b1-83a5-d7d1ad0261d1",
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers",
        book: "The Autobiography of Will Rogers"
    },
    {
        id: "1977badd-5fbe-4d78-8acd-885172969173",
        text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
        author: "Unknown",
        book: "Life Lessons"
    },
    {
        id: "1a13f636-3de9-4894-aa80-3547893a3db3",
        text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
        author: "Steve Jobs",
        book: "Steve Jobs"
    },
    {
        id: "faf48d76-bbcc-4045-8b8b-c19c909f7968",
        text: "People who are crazy enough to think they can change the world, are the ones who do.",
        author: "Rob Siltanen",
        book: "Think Different"
    },
    {
        id: "0ea80c81-05a7-41f5-89dc-25ed0f192ed7",
        text: "Failure will never overtake me if my determination to succeed is strong enough.",
        author: "Og Mandino",
        book: "The Greatest Salesman in the World"
    },
    {
        id: "edbb3e87-bbe1-494b-bc09-3a651991f148",
        text: "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That's the classic entrepreneur.",
        author: "Mohnish Pabrai",
        book: "The Dhandho Investor"
    },
    {
        id: "ef48381a-dbf0-4958-bbe3-3aa8dbe30801",
        text: "We may encounter many defeats but we must not be defeated.",
        author: "Maya Angelou",
        book: "I Know Why the Caged Bird Sings"
    },
    {
        id: "6fc70732-f4ae-4a07-94ec-ac0f706e87ef",
        text: "Knowing yourself is the beginning of all wisdom.",
        author: "Aristotle",
        book: "Nicomachean Ethics"
    },
    {
        id: "14a52a89-7543-4ea0-a9c1-cb537bfeb55a",
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson",
        book: "Self-Reliance"
    },
    {
        id: "6b5d75e1-e2a8-4702-b7ca-a9cb09312bb1",
        text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau",
        book: "Walden"
    },
    {
        id: "7306d12b-7d35-4803-bbf9-a932589e20b8",
        text: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett",
        book: "One More Time"
    },
    {
        id: "c475ba00-a616-4fb9-a93b-e32a52b121ed",
        text: "Nothing is impossible, the word itself says 'I'm possible'!",
        author: "Audrey Hepburn",
        book: "Audrey Hepburn"
    },
    {
        id: "86742015-06fb-4eb1-adb4-77b0185b3415",
        text: "There is nothing impossible to they who will try.",
        author: "Alexander the Great",
        book: "The Campaigns of Alexander"
    },
    {
        id: "3ab9d26f-2ca5-4f57-9d31-b940e794e778",
        text: "The bad news is time flies. The good news is you're the pilot.",
        author: "Michael Altshuler",
        book: "The Complete Idiot's Guide to Changing Your Life"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440085",
        text: "Life has got all those twists and turns. You've got to hold on tight and off you go.",
        author: "Nicole Kidman",
        book: "Nicole Kidman"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440086",
        text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
        author: "Walt Whitman",
        book: "Leaves of Grass"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440087",
        text: "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
        author: "Amal Clooney",
        book: "Amal Clooney"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440088",
        text: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it.",
        author: "Chimamanda Ngozi Adichie",
        book: "Americanah"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440089",
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
        book: "The Chronicles of Narnia"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440090",
        text: "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.",
        author: "Dr. Phil",
        book: "Life Strategies"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440091",
        text: "For me, becoming isn't about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self.",
        author: "Michelle Obama",
        book: "Becoming"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440092",
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa",
        book: "A Simple Path"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440093",
        text: "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
        author: "Lady Gaga",
        book: "Born This Way"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440094",
        text: "If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is.",
        author: "Gabrielle Bernstein",
        book: "The Universe Has Your Back"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440095",
        text: "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
        author: "Mandy Hale",
        book: "The Single Woman"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440096",
        text: "You can be everything. You can be the infinite amount of things that people are.",
        author: "Kesha",
        book: "Rainbow"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440097",
        text: "Nothing in the world is more common than unsuccessful people with talent.",
        author: "Unknown",
        book: "Life Lessons"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440098",
        text: "Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.",
        author: "Kofi Annan",
        book: "Interventions"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440099",
        text: "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
        author: "Roald Dahl",
        book: "The Twits"
    }
];
