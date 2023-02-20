package edu.dio.challenges.basic.Dragon;

import java.util.Scanner;

public class Dragon {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		int cases = scan.nextInt();
		int power;
		
		for (int i=0; i<cases; i++) {
			
			power = scan.nextInt();
			
			if (power > 8000) {
				
				System.out.println("Mais de 8000!");
				
			} else {
				
				System.out.println("Inseto!");
				
			}			
		}
		
		scan.close();

	}

}