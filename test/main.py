def read_spots(file_path):
    spots = {}
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            program, spot_count = line.strip().split(';')
            spots[program] = int(spot_count)
    return spots

def read_applicants(file_path):
    applicants = []
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            snils, program, priority = line.strip().split(';')
            applicants.append((snils, program, int(priority)))
    return applicants

def allocate_spots(applicants, spots):
    allocation = {}
    for snils, program, priority in applicants:
        if snils not in allocation:
            if spots[program] > 0:
                allocation[snils] = program
                spots[program] -= 1
    return allocation

def main():
    spots = read_spots('spots.txt')
    applicants = read_applicants('applicants.txt')
    allocation = allocate_spots(applicants, spots)
    
    for snils, program in allocation.items():
        print(f'{snils} got a spot in {program}')

if __name__ == "__main__":
    main()