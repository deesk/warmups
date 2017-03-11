
require 'pry'

class Scrabble

  @@letters= {
      1 => 'AEIOULNRST',
      2 => 'DG',
      3 => 'BCMP',
      4 => 'FHVWY',
      5 => 'K',
      8 => 'JX',
      10 => 'QZ'
    }

  def self.score(str)

    arr = []

    @@letters.each do |key, value|
      lower = value.downcase

      str.each_char do |c|
        if (lower.include? (c))
           arr << key
        end
      end
    end

    user_score = arr.reduce(:+)
    puts "String: '#{str}' Score: #{user_score}." 

  end

end
