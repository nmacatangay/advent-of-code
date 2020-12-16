input = %w[8 13 1 0 18 9]

def part1(input, limit)
  last_number = nil
  memory = {}
  counter = 1

  input.each do |data|
    memory[data] = [counter]
    last_number = data
    counter += 1
  end

  while counter <= limit
    case memory[last_number].length
    when 1
      last_number = '0'
    when 2
      last_number = (memory[last_number][1].to_i - memory[last_number][0].to_i).to_s
    end

    if memory.key? last_number
      memory[last_number] << counter
      memory[last_number].shift if memory[last_number].length > 2
    else
      memory[last_number] = [counter]
    end

    counter += 1
  end

  last_number
end

puts part1(input, 2020)
puts part1(input, 30_000_000)
