module Jekyll
    module CustomFilters
      def reverse_string(input)
        input.reverse
      end
      def find_value(input, key)
        if input.is_a?(Hash) && input.key?(key)
            input[key]
        else
            nil
        end
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::CustomFilters)