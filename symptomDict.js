
exports.test = (r) => console.log(response[2]);


//exports.newMethod = (r) => 
//-----------------------------------------------

var doc = " If symptoms persist, seek your healthcare professional."
var response = [
	"Drink lots of fluids and lie down." + doc,
	"Sounds painful! Try drinking some soda or applying a heat pack to the area." + doc,
	"Keep lots of tissues on hand or use a saline nasal spray." + doc,
	"You might have a cold! Try taking some over-the-counter cold medicine." + doc,
	"Stop scratching! Try rubbing some over-the-counter itch ointment on the area." + doc,
	"Stretch and ice after workouts or strenuous activities." + doc,

	];

var symptoms = {
	"head hurts": response[0],
	"headache": response[0], 
	"head ache": response[0],
	"head aches": response[0],
	"head is bothering me": response[0],
	
	"tummy hurts": response[1],
	"tummyache": response[1],
	"tummy ache": response[1],
	"tummy aches": response[1],
	"tummy is bothering me": response[1],


	"stomach hurts": response[1],
	"stomachache": response[1],
	"stomach aches": response[1],
	"stomach ache": response[1],
	"stomach is bothering me": response[1],

	"runny nose": response[2],
	"nose is running": response[2],
	"nose is runny": response[2],

	"cough": response[3],
	"coughing": response[3],
	"itchy throat": response[3],
	"sore throat": response[3],
	"swollen throat": response[3],
	"throat hurts": response[3],
	"throat aches": response[3],
	"irritated throat": response[3],

	"rash": response[4],
	"itchy": response[4],
	"irritated skin": response[4],

	"sore muscles": response[5],
	"sore muscle": response[5],
	"muscles are sore": response[5],
	"muscle is sore": response[5],
};


var hashtags  = [
	"#sick", 
	"#ill", 
	"#hurts", 
	"#health", 
	"#healthcare",
	"#medicine",
	"#meds",
	"#medical",
	"#infection",

	];

var healthTerms = `Abdominal Pain
	Abdominal Pain in Children
	Acetaminophen Poisoning
	Alcohol Intoxication
	Allergic Reaction
	Altitude/Mountain Sickness
	Amputation (Accidental)
	Animal Bites
	Ankle Fracture
	Ankle Sprain
	Anthrax
	Aspirin Poisoning
	Asthma Attack
	Asthma Attack in Children
	Asthma Attack in Pregnancy
	Battery Ingestion
	Bends/Decompression Syndrome
	Black Eye
	Black Widow Spider Bite
	Bleeding
	Bleeding During Pregnancy
	Bleeding Under Nails
	Blisters
	Blood in Stool
	Blood in the Urine
	Blue Lips (Cyanosis)
	Breathing Problems
	Broken Arm
	Broken Arm in Children
	Broken Collarbone
	Broken Elbow
	Broken Finger
	Broken Finger in Children
	Broken Foot
	Broken Hand
	Broken Hip
	Broken Jaw
	Broken Leg
	Broken Nose
	Broken or Knocked-out Teeth
	Broken Shoulder Blade
	Broken Toe
	Brown Recluse Spider Bite
	Bruises
	Bruises in Children
	Burns
	Burns/Scalds in Children
	Carbon Monoxide Poisoning
	Catfish Sting
	Chemical Burns
	Chemical Eye Burn
	Chest Injury
	Chest Pain
	Chest Pain (Angina)
	Choking
	Choking in Children
	Colds in Children
	Concussion
	Congestion in Children
	Constipation
	Convulsions in Children
	Coughs
	CPR for Adults
	CPR for Children
	Crabs (Pubic Lice)
	Cradle Cap
	Crying/Colic
	Cuts and Bleeding
	Cuts and Bleeding in Children
	Cyanide Poisoning
	Dehydration
	Dehydration in Children
	Diaper Rash
	Diarrhea
	Diarrhea in Children
	Diving Ear Pain
	Dizziness
	Drowning
	Drowning in Children
	Drug Allergy
	Drug Overdose
	Ear Foreign Body
	Ear Infections
	Eczema
	Elbow Dislocation
	Electric Shock
	Exercise-Induced Asthma
	Eye Bleeding (Hyphema)
	Eye Burns/Corneal Burns
	Eye Injuries
	Eye Injuries in Children
	Eye Sores/Corneal Ulcers
	Eyelid Inflammation
	Facial Fracture
	Fainting
	Fever in Adults
	Fever in Children
	Finger Dislocation
	Finger Injuries
	Fishhook Injuries
	Food Poisoning
	Foreign Body in the Eye
	Fracture or Dislocation
	Frostbite
	Gas Pain in Children
	Gastroenteritis Treatment
	Hand Injury
	Head Injury
	Head Injury in Children
	Headache
	Heart Attack
	Heart Palpatations
	Heat Exhaustion
	Heat Rash
	Heat Stroke
	Hiccups
	Hives
	Hives and Angioedema
	How to Operate an Automated External Defibrillator
	Human Bites
	Hyperventilation
	Hypothermia
	Inability to Urinate
	Insect Sting Allergy
	Insect Stings and Bites
	Insulin Reaction
	Iron Poisoning
	Jaundice
	Jellyfish Stings
	Knee Dislocation
	Knee Injury
	Labor
	Lice
	Lightning Strike
	Low Blood Sugar
	Migraine Headache
	Migraine Headache in Children
	Miscarriage
	Muscle Strain
	Nail Injuries
	Neck Strain
	Nose Foreign Body
	Nosebleeds
	Nursemaid Elbow
	Panic Attacks
	Paronychia
	Poison Ivy, Oak, or Sumac
	Poisoning
	Poisoning in Children
	Puncture Wound
	Rabies
	Rape/Sexual Assault
	Rashes
	Rectal Bleeding
	Rectal Foreign Object
	Rectal Pain
	Reflux (GERD) in Children
	Ricin Poisoning
	Ruptured Tendon
	Scratched Eye/Corneal Abrasion
	Seizure
	Seizure in Children
	Severe Allergic Reaction
	Shark Bite
	Shock
	Shock/Electrocution
	Shoulder and Neck Pain
	Shoulder Dislocation
	Shoulder Separation
	Skier's Thumb
	Slipped Disk
	Smoke Inhalation
	Snakebite
	Splinters
	Sprains and Strains
	Stingray Injury
	Stomach Ache/Nausea
	Stroke
	Stroke/TIA
	Sty
	Suicidal Thoughts
	Sunburn
	Swallowed Object
	Swollen Testicles/Orchitis
	Tailbone Injury
	Teething Pain
	Testicle Pain
	Tetanus
	Tick Removal
	Toothache
	Toxic Shock Syndrome
	Traveler's Diarrhea
	Vaginal Bleeding
	Vaginal Foreign Body
	Vertigo
	Vomiting and Nausea
	Vomiting During Pregnancy
	Vomiting/Spitting Up in Children
	Whiplash
	Wrist Injury`;