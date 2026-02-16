import heroImg from "@/assets/hero-news.jpg";
import techImg from "@/assets/tech-news.jpg";
import sportsImg from "@/assets/sports-news.jpg";
import businessImg from "@/assets/business-news.jpg";
import politicsImg from "@/assets/politics-news.jpg";
import entertainmentImg from "@/assets/entertainment-news.jpg";

export type Category = "Politics" | "Technology" | "Sports" | "Entertainment" | "Business";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  image: string;
  author: string;
  date: string;
  readTime: string;
  trending?: boolean;
  featured?: boolean;
}

export const categories: Category[] = ["Politics", "Technology", "Sports", "Entertainment", "Business"];

export const articles: Article[] = [
  {
    id: "1",
    title: "Global Leaders Convene for Historic Climate Summit in Geneva",
    excerpt: "World leaders gather to discuss unprecedented climate action measures as environmental concerns reach critical levels.",
    content: `In what has been described as the most significant environmental gathering in decades, world leaders from over 150 countries have convened in Geneva for a historic climate summit. The summit aims to establish binding commitments to reduce carbon emissions by 60% before 2035.\n\nThe opening ceremony featured impassioned speeches from several heads of state, with many acknowledging that previous efforts have fallen short of what science demands. "We are at a crossroads," declared the summit's chairperson. "The decisions we make in the next 48 hours will determine the future of our planet for generations to come."\n\nKey topics on the agenda include renewable energy financing, deforestation prevention, and the establishment of a global carbon credit marketplace. Developing nations have pressed for greater financial support, arguing that they bear a disproportionate burden of climate change impacts despite contributing the least to the problem.\n\nEnvironmental organizations have mobilized outside the conference center, calling for more aggressive timelines and transparent accountability mechanisms. The summit is expected to conclude with a joint declaration that could reshape international environmental policy.`,
    category: "Politics",
    image: politicsImg,
    author: "Sarah Mitchell",
    date: "Feb 13, 2026",
    readTime: "6 min read",
    trending: true,
    featured: true,
  },
  {
    id: "2",
    title: "Revolutionary AI Chip Achieves Quantum-Level Processing Speeds",
    excerpt: "A breakthrough semiconductor design promises to transform computing with unprecedented processing capabilities.",
    content: `Silicon Valley startup NeuralCore has unveiled a revolutionary AI chip that achieves processing speeds previously thought possible only with quantum computers. The NC-7000 processor utilizes a novel architecture combining neuromorphic design with advanced photonic circuits.\n\nThe chip can perform 500 trillion operations per second while consuming just 75 watts of power—a hundred-fold improvement over current leading processors. Industry analysts predict this could accelerate AI development by a decade.\n\n"This isn't just an incremental improvement," said Dr. James Chen, NeuralCore's chief scientist. "We've fundamentally reimagined how silicon processes information. The NC-7000 mimics the parallel processing capabilities of biological neural networks."\n\nMajor tech companies including Google, Microsoft, and Amazon have already placed pre-orders. The chip is expected to ship in Q3 2026, with applications ranging from autonomous vehicles to drug discovery and climate modeling.`,
    category: "Technology",
    image: techImg,
    author: "David Park",
    date: "Feb 12, 2026",
    readTime: "5 min read",
    trending: true,
  },
  {
    id: "3",
    title: "Underdog Team Stuns World Champions in Historic UEFA Final",
    excerpt: "In a match that will be remembered for decades, an unlikely contender claims European football's greatest prize.",
    content: `In one of the greatest upsets in football history, FC Copenhagen stunned defending champions Real Madrid 3-2 in the UEFA Champions League final at Wembley Stadium. The Danish club, making their first-ever appearance in the final, mounted a remarkable comeback from two goals down.\n\nStriker Emil Andersen scored a hat trick, including a stoppage-time winner that sent the neutral crowd into raptures. Copenhagen's tactical discipline and counter-attacking brilliance proved too much for the star-studded Spanish side.\n\n"Nobody believed we could do it," said an emotional Andersen after the match. "But we believed in each other, and that made all the difference." The victory marks the first time a Danish club has won the Champions League.\n\nThe match drew a global television audience of over 800 million, making it the most-watched club football match in history.`,
    category: "Sports",
    image: sportsImg,
    author: "Marcus Webb",
    date: "Feb 11, 2026",
    readTime: "4 min read",
    trending: true,
  },
  {
    id: "4",
    title: "Streaming Wars Intensify as New Platform Launches with Blockbuster Lineup",
    excerpt: "A major media conglomerate enters the streaming space with an aggressive content strategy and competitive pricing.",
    content: `The streaming landscape has been shaken once again as Paramount Global launches its revamped streaming service, Paramount+Ultra, with a staggering 200 original titles planned for its first year. The platform promises a unique blend of legacy content and cutting-edge originals.\n\nPriced at $7.99 per month, the service undercuts most competitors while offering 4K HDR streaming and simultaneous device access. The launch lineup includes highly anticipated series from acclaimed directors and a new Star Trek franchise.\n\n"We're not just entering the streaming wars—we're redefining them," said the company's CEO during the launch event. The platform has already secured 15 million pre-registrations, suggesting strong consumer interest.\n\nIndustry analysts note that the streaming market, now valued at over $200 billion, shows no signs of saturation despite the proliferation of services.`,
    category: "Entertainment",
    image: entertainmentImg,
    author: "Lisa Romano",
    date: "Feb 10, 2026",
    readTime: "5 min read",
  },
  {
    id: "5",
    title: "Global Markets Rally as Central Banks Signal Coordinated Rate Cuts",
    excerpt: "Major stock indices surge following synchronized monetary easing signals from the world's largest central banks.",
    content: `Global financial markets experienced their strongest rally in three years after the Federal Reserve, European Central Bank, and Bank of Japan simultaneously signaled upcoming interest rate reductions. The S&P 500 gained 4.2%, while European and Asian indices posted similar gains.\n\nThe coordinated move comes in response to declining inflation rates and growing concerns about economic slowdown in several major economies. Fed Chair Jerome Powell stated that "conditions are ripe for a measured easing of monetary policy."\n\nBond markets also reacted positively, with yields falling across the curve. The 10-year U.S. Treasury yield dropped to 3.1%, its lowest level in two years.\n\nEconomists broadly welcomed the move, though some warned that premature easing could reignite inflationary pressures. "The timing is delicate," said Chief Economist Maria Santos. "But the data supports a careful pivot toward accommodation."`,
    category: "Business",
    image: businessImg,
    author: "Robert Chen",
    date: "Feb 9, 2026",
    readTime: "6 min read",
    trending: true,
  },
  {
    id: "6",
    title: "Breakthrough Gene Therapy Offers Hope for Rare Childhood Diseases",
    excerpt: "A pioneering treatment shows remarkable results in clinical trials, potentially curing previously untreatable genetic conditions.",
    content: `Researchers at Johns Hopkins University have announced groundbreaking results from a Phase III clinical trial of a gene therapy targeting spinal muscular atrophy (SMA) in children. The one-time treatment showed a 94% success rate in restoring motor function in patients under age two.\n\nThe therapy uses a modified viral vector to deliver a functional copy of the SMN1 gene directly to motor neurons. Unlike existing treatments that require repeated dosing, this approach offers a potential permanent cure.\n\n"These results exceed our most optimistic projections," said lead researcher Dr. Amanda Foster. "We're seeing children who were given months to live now reaching developmental milestones on par with their healthy peers."\n\nThe FDA has granted the therapy Breakthrough Therapy designation, fast-tracking its review process. If approved, it would become the most effective gene therapy ever brought to market.`,
    category: "Technology",
    image: techImg,
    author: "Dr. Emily Watson",
    date: "Feb 8, 2026",
    readTime: "7 min read",
  },
  {
    id: "7",
    title: "New Trade Agreement Reshapes Pacific Rim Economics",
    excerpt: "Fifteen nations sign a comprehensive trade pact that could redirect trillions in commerce and reshape global supply chains.",
    content: `In a landmark ceremony in Singapore, fifteen Pacific Rim nations signed the Comprehensive Pacific Partnership Agreement (CPPA), creating the world's largest free trade zone. The agreement eliminates tariffs on 95% of goods traded between member nations.\n\nThe pact covers countries representing 40% of global GDP, including Japan, Australia, South Korea, and several Southeast Asian nations. Notable exclusions include China and the United States, though both have expressed interest in future negotiations.\n\nKey provisions include digital trade standards, environmental protections, and labor rights guarantees that go beyond traditional free trade agreements.\n\n"This agreement reflects the economic realities of the 21st century," said Singapore's trade minister. "It creates a framework for sustainable, inclusive growth across the Pacific Rim."`,
    category: "Politics",
    image: politicsImg,
    author: "James Crawford",
    date: "Feb 7, 2026",
    readTime: "5 min read",
  },
  {
    id: "8",
    title: "Electric Vehicle Sales Surpass Combustion Engines for First Time",
    excerpt: "A historic milestone in automotive history as EV sales overtake traditional vehicles in major global markets.",
    content: `For the first time in automotive history, electric vehicle sales have surpassed those of internal combustion engine vehicles across Europe and China. Combined EV sales in January 2026 reached 2.3 million units, compared to 2.1 million for traditional vehicles.\n\nThe milestone was driven by falling battery costs, expanding charging infrastructure, and increasingly stringent emission regulations. Tesla, BYD, and Volkswagen led the EV sales charts.\n\n"This is the tipping point we've been anticipating," said automotive industry analyst Maria Gonzalez. "The transition to electric mobility is no longer a question of if, but how quickly."\n\nThe shift has significant implications for oil markets, with analysts predicting peak oil demand could arrive years earlier than previously forecast.`,
    category: "Business",
    image: businessImg,
    author: "Thomas Mueller",
    date: "Feb 6, 2026",
    readTime: "4 min read",
  },
  {
    id: "9",
    title: "Record-Breaking Transfer Window Shakes Up Premier League",
    excerpt: "Clubs spend unprecedented amounts as the winter transfer window delivers blockbuster signings and dramatic departures.",
    content: `The January 2026 transfer window has shattered all spending records, with Premier League clubs collectively investing over £2.8 billion in new talent. The headline move saw Manchester City secure Brazilian prodigy Lucas Silva for a world-record £180 million.\n\nChelsea, Arsenal, and Newcastle were also among the biggest spenders, while Liverpool made strategic moves to bolster their midfield and defense. The spending spree reflects the enormous broadcast revenue flowing into English football.\n\n"The financial power of the Premier League continues to grow," said football finance expert Dr. Stefan Szymanski. "We're seeing clubs invest with a long-term vision rather than panic buying."\n\nHowever, concerns about financial sustainability have prompted renewed calls for stricter spending regulations across European football.`,
    category: "Sports",
    image: sportsImg,
    author: "Chris Taylor",
    date: "Feb 5, 2026",
    readTime: "5 min read",
  },
  {
    id: "10",
    title: "Award Season Shockers: Independent Films Dominate Nominations",
    excerpt: "This year's major film awards see a surprising shift toward independent cinema, challenging studio dominance.",
    content: `The 2026 awards season has delivered its biggest surprise in years, with independent films securing the majority of nominations across major categories. Low-budget drama "Whisper of the Pines," made for just $3 million, leads with 11 nominations.\n\nThe shift reflects changing audience tastes and the growing influence of streaming platforms in championing diverse storytelling. Several nominees were acquired by streaming services after successful festival runs.\n\n"Independent cinema has never been more vibrant," said film critic Anthony Lane. "These films prove that compelling storytelling doesn't require a massive budget."\n\nThe trend has sparked debate about the future of theatrical releases, with some industry leaders arguing that the traditional studio model needs fundamental restructuring.`,
    category: "Entertainment",
    image: entertainmentImg,
    author: "Sofia Reyes",
    date: "Feb 4, 2026",
    readTime: "4 min read",
  },
  {
    id: "11",
    title: "Cybersecurity Crisis: Major Banks Hit by Coordinated Attack",
    excerpt: "A sophisticated cyberattack targets banking infrastructure across multiple countries, raising alarms about digital security.",
    content: `A coordinated cyberattack has targeted banking systems in at least 12 countries, disrupting services for millions of customers. The attack, attributed to a sophisticated state-sponsored group, exploited previously unknown vulnerabilities in widely used banking software.\n\nWhile no customer funds were reportedly stolen, the attack disrupted online banking, ATM networks, and interbank transfers for several hours. Central banks and financial regulators have convened emergency meetings to assess the damage and coordinate responses.\n\n"This attack represents a significant escalation in cyber threats to financial infrastructure," said cybersecurity expert Bruce Schneier. "It demonstrates capabilities that should concern every nation."\n\nThe incident has renewed calls for mandatory cybersecurity standards in the banking sector and increased investment in digital defense systems.`,
    category: "Technology",
    image: techImg,
    author: "Alex Thompson",
    date: "Feb 3, 2026",
    readTime: "6 min read",
  },
  {
    id: "12",
    title: "Housing Market Transformation: Remote Work Reshapes Urban Landscapes",
    excerpt: "The permanent shift to remote work is driving dramatic changes in housing markets and city planning worldwide.",
    content: `Three years after the remote work revolution, cities worldwide are experiencing fundamental transformations in their housing markets and urban planning. Former commercial districts are being converted to residential use, while suburban and rural areas see unprecedented development.\n\nData shows that 42% of knowledge workers now work remotely full-time, with another 35% in hybrid arrangements. This shift has reduced demand for urban office space by 30% while driving up housing prices in previously affordable areas.\n\n"We're witnessing the most significant urban transformation since the industrial revolution," said urban planning professor Dr. Katherine Wells. "Cities must adapt or risk becoming obsolete."\n\nSeveral major cities have responded with innovative zoning reforms, mixed-use development incentives, and investment in digital infrastructure for suburban communities.`,
    category: "Business",
    image: businessImg,
    author: "Jennifer Park",
    date: "Feb 2, 2026",
    readTime: "5 min read",
  },
];
